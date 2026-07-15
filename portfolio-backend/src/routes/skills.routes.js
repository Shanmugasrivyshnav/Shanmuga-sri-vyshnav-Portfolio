import { Router } from "express";
import * as ctrl from "../controllers/skills.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(ctrl.listSkills));

export default router;
