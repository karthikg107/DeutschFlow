import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import aiRoutes from "./routes/aiRoutes.js";
import grammarRoutes from "./routes/grammarRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import vocabularyRoutes from "./routes/vocabularyRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";
import passwordRoutes from "./routes/passwordRoutes.js";


dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // allow requests with no origin (curl, mobile apps, Postman)
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
  })
);

app.use(express.json());

const otpLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: "Too many OTP requests, please try again later." },
});

const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many login attempts, please try again later." },
});

// ROUTES
app.use("/api/ai", aiRoutes);

app.use("/api/grammar", grammarRoutes);

app.use("/api/auth/login", loginLimiter);
app.use("/api/auth", authRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/vocabulary", vocabularyRoutes);

app.use("/api/otp", otpLimiter, otpRoutes);

app.use(
  "/api/auth",
  passwordRoutes
);

// HEALTH
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `✅ Backend running on port ${PORT}`
  );

});