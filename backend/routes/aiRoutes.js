import express from "express";
import { handleMessage } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", handleMessage);

export default router;