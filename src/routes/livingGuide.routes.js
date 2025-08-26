import express from "express";
import {
  getLivingGuides,
  getLivingGuideById,
  addLivingGuide,
  searchLivingGuideByName,
} from "../controllers/livingGuide.controller.js";

const router = express.Router();

router.get("/", getLivingGuides); // Get all living guides
router.get("/search", searchLivingGuideByName);
router.get("/:id", getLivingGuideById); // Get by ID
router.post("/", addLivingGuide); // Add new guide

export default router;
