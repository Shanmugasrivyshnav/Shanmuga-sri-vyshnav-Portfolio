import { Router } from "express";
import * as ctrl from "../controllers/education.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(ctrl.listEducation));

export default router;
