import { prisma } from "../config/db.js";
import { slugify } from "../validators/blog.validator.js";

// GET /api/blog — public: published posts only
export async function listPublishedPosts(req, res) {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      publishedAt: true,
    },
  });
  res.json(posts);
}

// GET /api/blog/:slug
export async function getPostBySlug(req, res) {
  const post = await prisma.blogPost.findUnique({ where: { slug: req.params.slug } });
  if (!post || !post.published) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
}

// GET /api/admin/blog — admin: all posts, published or not
export async function listAllPosts(req, res) {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
  res.json(posts);
}

export async function createPost(req, res) {
  const { title, slug, published, ...rest } = req.body;
  const finalSlug = slug || slugify(title);

  const post = await prisma.blogPost.create({
    data: {
      title,
      slug: finalSlug,
      published: !!published,
      publishedAt: published ? new Date() : null,
      ...rest,
    },
  });
  res.status(201).json(post);
}

export async function updatePost(req, res) {
  const id = Number(req.params.id);
  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: "Post not found" });

  const data = { ...req.body };
  // If publishing for the first time, stamp publishedAt
  if (data.published && !existing.published) {
    data.publishedAt = new Date();
  }

  const post = await prisma.blogPost.update({ where: { id }, data });
  res.json(post);
}

export async function deletePost(req, res) {
  await prisma.blogPost.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
