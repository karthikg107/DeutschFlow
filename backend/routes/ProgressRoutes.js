import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  saveProgress,
  getProgress,
} from "../controllers/progressController.js";

const router = express.Router();

router.post("/save", protect, saveProgress);

router.get("/", protect, getProgress);

export default router;