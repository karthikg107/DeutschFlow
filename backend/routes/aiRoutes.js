import express from "express";
import { handleMessage } from "../controllers/aiController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/chat", protect, handleMessage);

export default router;