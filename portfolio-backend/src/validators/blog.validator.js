import { z } from "zod";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export const blogPostSchema = z.object({
  title: z.string().trim().min(1).max(200),
  slug: z.string().trim().min(1).max(220).optional(), // auto-generated from title if omitted
  excerpt: z.string().trim().max(300).optional().nullable(),
  content: z.string().min(1),
  coverImage: z.string().url().optional().nullable(),
  published: z.boolean().optional().default(false),
});

export const blogPostUpdateSchema = blogPostSchema.partial();
export { slugify };
