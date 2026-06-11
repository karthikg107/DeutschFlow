import express from "express";

import {
  getVocabularyByLevel,
  searchVocabulary,
  getTopicVocabulary,
  saveWord,
  getSavedWords,
  removeSavedWord,
} from "../controllers/vocabularyController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/level/:level",
  getVocabularyByLevel
);

router.post(
  "/save/:wordId",
  protect,
  saveWord
);

router.delete(
  "/save/:wordId",
  protect,
  removeSavedWord
);

router.get(
  "/saved",
  protect,
  getSavedWords
);

export default router;