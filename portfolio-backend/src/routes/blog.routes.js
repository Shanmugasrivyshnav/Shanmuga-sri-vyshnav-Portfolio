import { Router } from "express";
import * as ctrl from "../controllers/blog.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(ctrl.listPublishedPosts));
router.get("/:slug", asyncHandler(ctrl.getPostBySlug));

export default router;
