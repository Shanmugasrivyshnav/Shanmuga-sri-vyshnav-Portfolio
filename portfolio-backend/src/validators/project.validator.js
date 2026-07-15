import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().trim().min(1).max(150),
  description: z.string().trim().min(1),
  techStack: z.array(z.string()).default([]),
  imageUrl: z.string().url().optional().nullable(),
  githubUrl: z.string().url().optional().nullable(),
  liveUrl: z.string().url().optional().nullable(),
  featured: z.boolean().optional().default(false),
  displayOrder: z.number().int().optional().default(0),
  tagNames: z.array(z.string()).optional().default([]), // e.g. ["react", "fullstack"]
});

export const projectUpdateSchema = projectSchema.partial();
