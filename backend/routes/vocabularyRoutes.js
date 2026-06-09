import express from "express";

import {
  getVocabularyByLevel,
  searchVocabulary,
  getTopicVocabulary,
  saveWord,
  getSavedWords,
} from "../controllers/vocabularyController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/level/:level",
  getVocabularyByLevel
);

router.get(
  "/search",
  protect,
  searchVocabulary
);

router.get(
  "/topic/:level/:topic",
  protect,
  getTopicVocabulary
);

router.post(
  "/save/:wordId",
  protect,
  saveWord
);

router.get(
  "/saved",
  protect,
  getSavedWords
);

export default router;