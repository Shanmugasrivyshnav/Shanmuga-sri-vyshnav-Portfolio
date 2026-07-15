import { z } from "zod";

// NOTE: match these field names to your actual ContactForm component's
// input `name` attributes if they differ (e.g. some templates use
// `fullName` instead of `name`, or `msg` instead of `message`).
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000),
});
