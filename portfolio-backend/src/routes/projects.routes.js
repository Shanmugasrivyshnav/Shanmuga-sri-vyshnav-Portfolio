import { Router } from "express";
import * as ctrl from "../controllers/projects.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(ctrl.listProjects));
router.get("/:id", asyncHandler(ctrl.getProject));

export default router;
