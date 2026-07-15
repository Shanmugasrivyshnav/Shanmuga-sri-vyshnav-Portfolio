import { Router } from "express";
import * as ctrl from "../controllers/contact.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middleware/validate.middleware.js";
import { contactRateLimiter } from "../middleware/rateLimit.middleware.js";
import { contactSchema } from "../validators/contact.validator.js";

const router = Router();

router.post("/", contactRateLimiter, validate(contactSchema), asyncHandler(ctrl.submitContactMessage));

export default router;
