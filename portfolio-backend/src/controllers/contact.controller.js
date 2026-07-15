import { prisma } from "../config/db.js";
import { sendContactNotification } from "../utils/mailer.js";

// POST /api/contact — public
export async function submitContactMessage(req, res) {
  const saved = await prisma.contactMessage.create({ data: req.body });

  // Fire-and-forget: don't block/fail the response on email delivery
  sendContactNotification(req.body);

  res.status(201).json({
    success: true,
    message: "Thanks for reaching out — I'll get back to you soon!",
    id: saved.id,
  });
}

// GET /api/admin/contact-messages — admin only
export async function listContactMessages(req, res) {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(messages);
}

// PATCH /api/admin/contact-messages/:id/read — admin only
export async function markMessageRead(req, res) {
  const message = await prisma.contactMessage.update({
    where: { id: Number(req.params.id) },
    data: { isRead: true },
  });
  res.json(message);
}

// DELETE /api/admin/contact-messages/:id — admin only
export async function deleteContactMessage(req, res) {
  await prisma.contactMessage.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
