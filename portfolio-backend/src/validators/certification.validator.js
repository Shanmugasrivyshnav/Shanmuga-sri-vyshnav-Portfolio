import { z } from "zod";

export const certificationSchema = z.object({
  title: z.string().trim().min(1).max(200),
  issuer: z.string().trim().min(1).max(150),
  issueDate: z.coerce.date().optional().nullable(),
  credentialUrl: z.string().url().optional().nullable(),
  imageUrl: z.string().url().optional().nullable(),
  displayOrder: z.number().int().optional().default(0),
});

export const certificationUpdateSchema = certificationSchema.partial();
