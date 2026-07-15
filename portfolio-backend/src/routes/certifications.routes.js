import { Router } from "express";
import * as ctrl from "../controllers/certifications.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(ctrl.listCertifications));

export default router;
