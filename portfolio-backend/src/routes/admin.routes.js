import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { loginRateLimiter } from "../middleware/rateLimit.middleware.js";

import * as authCtrl from "../controllers/auth.controller.js";
import * as projectsCtrl from "../controllers/projects.controller.js";
import * as skillsCtrl from "../controllers/skills.controller.js";
import * as certCtrl from "../controllers/certifications.controller.js";
import * as eduCtrl from "../controllers/education.controller.js";
import * as blogCtrl from "../controllers/blog.controller.js";
import * as contactCtrl from "../controllers/contact.controller.js";

import { loginSchema } from "../validators/auth.validator.js";
import { projectSchema, projectUpdateSchema } from "../validators/project.validator.js";
import { skillSchema, skillUpdateSchema } from "../validators/skill.validator.js";
import { certificationSchema, certificationUpdateSchema } from "../validators/certification.validator.js";
import { educationSchema, educationUpdateSchema } from "../validators/education.validator.js";
import { blogPostSchema, blogPostUpdateSchema } from "../validators/blog.validator.js";

const router = Router();

// --- Auth (public — this IS the login endpoint) ---
router.post("/login", loginRateLimiter, validate(loginSchema), asyncHandler(authCtrl.login));

// --- Everything below requires a valid JWT ---
router.use(requireAuth);

// Projects
router.post("/projects", validate(projectSchema), asyncHandler(projectsCtrl.createProject));
router.put("/projects/:id", validate(projectUpdateSchema), asyncHandler(projectsCtrl.updateProject));
router.delete("/projects/:id", asyncHandler(projectsCtrl.deleteProject));

// Skills
router.post("/skills", validate(skillSchema), asyncHandler(skillsCtrl.createSkill));
router.put("/skills/:id", validate(skillUpdateSchema), asyncHandler(skillsCtrl.updateSkill));
router.delete("/skills/:id", asyncHandler(skillsCtrl.deleteSkill));

// Certifications
router.post("/certifications", validate(certificationSchema), asyncHandler(certCtrl.createCertification));
router.put("/certifications/:id", validate(certificationUpdateSchema), asyncHandler(certCtrl.updateCertification));
router.delete("/certifications/:id", asyncHandler(certCtrl.deleteCertification));

// Education
router.post("/education", validate(educationSchema), asyncHandler(eduCtrl.createEducation));
router.put("/education/:id", validate(educationUpdateSchema), asyncHandler(eduCtrl.updateEducation));
router.delete("/education/:id", asyncHandler(eduCtrl.deleteEducation));

// Blog
router.get("/blog", asyncHandler(blogCtrl.listAllPosts));
router.post("/blog", validate(blogPostSchema), asyncHandler(blogCtrl.createPost));
router.put("/blog/:id", validate(blogPostUpdateSchema), asyncHandler(blogCtrl.updatePost));
router.delete("/blog/:id", asyncHandler(blogCtrl.deletePost));

// Contact messages
router.get("/contact-messages", asyncHandler(contactCtrl.listContactMessages));
router.patch("/contact-messages/:id/read", asyncHandler(contactCtrl.markMessageRead));
router.delete("/contact-messages/:id", asyncHandler(contactCtrl.deleteContactMessage));

export default router;
