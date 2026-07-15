import { z } from "zod";

export const educationSchema = z.object({
  institution: z.string().trim().min(1).max(200),
  degree: z.string().trim().min(1).max(150),
  fieldOfStudy: z.string().trim().max(150).optional().nullable(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  displayOrder: z.number().int().optional().default(0),
});

export const educationUpdateSchema = educationSchema.partial();
