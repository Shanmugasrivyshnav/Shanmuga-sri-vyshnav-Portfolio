import { prisma } from "../config/db.js";

// GET /api/projects?tag=react&featured=true
export async function listProjects(req, res) {
  const { tag, featured } = req.query;

  const where = {};
  if (featured === "true") where.featured = true;
  if (tag) {
    where.tags = { some: { tag: { name: tag.toLowerCase() } } };
  }

  const projects = await prisma.project.findMany({
    where,
    orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
    include: { tags: { include: { tag: true } } },
  });

  res.json(projects.map(formatProject));
}

// GET /api/projects/:id
export async function getProject(req, res) {
  const project = await prisma.project.findUnique({
    where: { id: Number(req.params.id) },
    include: { tags: { include: { tag: true } } },
  });

  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(formatProject(project));
}

// POST /api/admin/projects
export async function createProject(req, res) {
  const { tagNames, ...data } = req.body;

  const project = await prisma.project.create({
    data: {
      ...data,
      tags: tagNames?.length
        ? {
            create: await Promise.all(
              tagNames.map(async (name) => ({
                tag: {
                  connectOrCreate: {
                    where: { name: name.toLowerCase() },
                    create: { name: name.toLowerCase() },
                  },
                },
              }))
            ),
          }
        : undefined,
    },
    include: { tags: { include: { tag: true } } },
  });

  res.status(201).json(formatProject(project));
}

// PUT /api/admin/projects/:id
export async function updateProject(req, res) {
  const { tagNames, ...data } = req.body;
  const id = Number(req.params.id);

  if (tagNames) {
    await prisma.projectTag.deleteMany({ where: { projectId: id } });
  }

  const project = await prisma.project.update({
    where: { id },
    data: {
      ...data,
      tags: tagNames?.length
        ? {
            create: await Promise.all(
              tagNames.map(async (name) => ({
                tag: {
                  connectOrCreate: {
                    where: { name: name.toLowerCase() },
                    create: { name: name.toLowerCase() },
                  },
                },
              }))
            ),
          }
        : undefined,
    },
    include: { tags: { include: { tag: true } } },
  });

  res.json(formatProject(project));
}

// DELETE /api/admin/projects/:id
export async function deleteProject(req, res) {
  await prisma.project.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

// Flattens the tags relation into a plain string array so the frontend
// doesn't need to know about the join table.
function formatProject(project) {
  return {
    ...project,
    tags: project.tags?.map((t) => t.tag.name) ?? [],
  };
}
