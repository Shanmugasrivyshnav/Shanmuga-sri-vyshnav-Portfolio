import { prisma } from "../config/db.js";

export async function listEducation(req, res) {
  const education = await prisma.education.findMany({
    orderBy: [{ displayOrder: "asc" }, { startDate: "desc" }],
  });
  res.json(education);
}

export async function createEducation(req, res) {
  const record = await prisma.education.create({ data: req.body });
  res.status(201).json(record);
}

export async function updateEducation(req, res) {
  const record = await prisma.education.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(record);
}

export async function deleteEducation(req, res) {
  await prisma.education.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
