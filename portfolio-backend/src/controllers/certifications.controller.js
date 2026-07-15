import { prisma } from "../config/db.js";

export async function listCertifications(req, res) {
  const certifications = await prisma.certification.findMany({
    orderBy: [{ displayOrder: "asc" }, { issueDate: "desc" }],
  });
  res.json(certifications);
}

export async function createCertification(req, res) {
  const certification = await prisma.certification.create({ data: req.body });
  res.status(201).json(certification);
}

export async function updateCertification(req, res) {
  const certification = await prisma.certification.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(certification);
}

export async function deleteCertification(req, res) {
  await prisma.certification.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
