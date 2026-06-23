import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());


// ROUTES
app.use("/api/ai", aiRoutes);

app.use("/api/grammar", grammarRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/vocabulary", vocabularyRoutes);

app.use(
  "/api/otp",
  otpRoutes
);

app.use(
  "/api/auth",
  passwordRoutes
);

// SERVER
const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {

  console.log(
    `✅ Backend running on port ${PORT}`
  );

});