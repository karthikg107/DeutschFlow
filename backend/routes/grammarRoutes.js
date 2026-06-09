import express from "express";

import {
  getAllLevels,
  getTopicsByLevel,
  getTopicBySlug,
} from "../controllers/grammarController.js";

const router = express.Router();

router.get("/", getAllLevels);

router.get("/topic/:slug", getTopicBySlug);

router.get("/:level", getTopicsByLevel);

export default router;