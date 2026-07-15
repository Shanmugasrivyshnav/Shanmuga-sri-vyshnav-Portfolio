import { Router } from "express";

import projectsRoutes from "./projects.routes.js";
import skillsRoutes from "./skills.routes.js";
import certificationsRoutes from "./certifications.routes.js";
import educationRoutes from "./education.routes.js";
import blogRoutes from "./blog.routes.js";
import contactRoutes from "./contact.routes.js";
import adminRoutes from "./admin.routes.js";

const router = Router();

router.get("/health", (req, res) => res.json({ status: "ok" }));

router.use("/projects", projectsRoutes);
router.use("/skills", skillsRoutes);
router.use("/certifications", certificationsRoutes);
router.use("/education", educationRoutes);
router.use("/blog", blogRoutes);
router.use("/contact", contactRoutes);
router.use("/admin", adminRoutes);

export default router;
