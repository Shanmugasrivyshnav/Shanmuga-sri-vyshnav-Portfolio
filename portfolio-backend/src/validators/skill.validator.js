import { z } from "zod";

export const skillSchema = z.object({
  name: z.string().trim().min(1).max(100),
  category: z.string().trim().min(1).max(50),
  proficiency: z.number().int().min(0).max(100).optional().nullable(),
  icon: z.string().trim().max(100).optional().nullable(),
  displayOrder: z.number().int().optional().default(0),
});

export const skillUpdateSchema = skillSchema.partial();
