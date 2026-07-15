import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

/**
 * Sends a notification email when someone submits the contact form.
 * If RESEND_API_KEY isn't set (e.g. local dev without email configured),
 * this silently no-ops so the contact form still works end-to-end.
 */
export async function sendContactNotification({ name, email, subject, message }) {
  if (!resend) {
    console.warn("[mailer] RESEND_API_KEY not set — skipping email notification.");
    return;
  }

  const to = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (!to) {
    console.warn("[mailer] CONTACT_NOTIFICATION_EMAIL not set — skipping email notification.");
    return;
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New portfolio contact: ${subject || "No subject"}`,
      html: `
        <h2>New message from your portfolio contact form</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    // Don't fail the API request just because email delivery failed —
    // the message is already saved in the database.
    console.error("[mailer] Failed to send notification email:", err.message);
  }
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
