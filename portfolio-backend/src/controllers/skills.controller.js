import { prisma } from "../config/db.js";

// GET /api/skills — grouped by category, which is how most portfolio
// "Skills" sections render (e.g. Frontend / Backend / Tools columns).
export async function listSkills(req, res) {
  const skills = await prisma.skill.findMany({
    orderBy: [{ category: "asc" }, { displayOrder: "asc" }],
  });

  const grouped = skills.reduce((acc, skill) => {
    (acc[skill.category] ??= []).push(skill);
    return acc;
  }, {});

  res.json({ grouped, flat: skills });
}

export async function createSkill(req, res) {
  const skill = await prisma.skill.create({ data: req.body });
  res.status(201).json(skill);
}

export async function updateSkill(req, res) {
  const skill = await prisma.skill.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(skill);
}

export async function deleteSkill(req, res) {
  await prisma.skill.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
