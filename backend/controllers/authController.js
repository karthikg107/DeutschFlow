import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";
import generateToken from "../utils/generateToken.js";
import { sendEmail } from "../utils/sendEmail.js";

const welcomeHtml = (name) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Welcome to DeutschFlow</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:Inter,Arial,sans-serif;color:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Logo row -->
        <tr><td style="padding-bottom:32px;text-align:center;">
          <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">🇩🇪 DeutschFlow</span>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:#12121a;border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:40px 36px;">

          <p style="margin:0 0 6px;font-size:24px;font-weight:800;letter-spacing:-0.5px;">Hallo ${name}! Welcome to DeutschFlow 🎉</p>
          <p style="margin:0 0 32px;font-size:15px;color:#94a3b8;line-height:1.65;">
            You've joined the beta — <strong style="color:#3b82f6;">all Premium features are free for you.</strong>
          </p>

          <!-- What you can do -->
          <p style="margin:0 0 16px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1.4px;color:#3b82f6;">What you can do</p>

          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <span style="font-size:18px;margin-right:10px;">📚</span>
              <strong>Grammar</strong>
              <span style="color:#94a3b8;font-size:13px;"> — 16 structured A1 lessons with XP rewards</span>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <span style="font-size:18px;margin-right:10px;">🔤</span>
              <strong>Vocabulary</strong>
              <span style="color:#94a3b8;font-size:13px;"> — Browse 1,900+ German words across A1/A2/B1</span>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <span style="font-size:18px;margin-right:10px;">🤖</span>
              <strong>AI Tutor</strong>
              <span style="color:#94a3b8;font-size:13px;"> — Chat, get corrections, translate with GPT-4</span>
            </td></tr>
            <tr><td style="padding:12px 0;">
              <span style="font-size:18px;margin-right:10px;">🎤</span>
              <strong>Speaking</strong>
              <span style="color:#94a3b8;font-size:13px;"> — 75 pronunciation sentences + 19 real-life scenarios</span>
            </td></tr>
          </table>

          <!-- CTA -->
          <div style="text-align:center;margin-top:36px;">
            <a href="https://deutschflow.xyz/dashboard"
               style="display:inline-block;background:#3b82f6;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:-0.2px;">
              Start Learning →
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:28px;text-align:center;font-size:12px;color:#475569;line-height:1.7;">
          Questions? Reply to this email or visit
          <a href="https://deutschflow.xyz" style="color:#3b82f6;text-decoration:none;">deutschflow.xyz</a>
          <br />© 2026 DeutschFlow. All rights reserved.
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

/* ======================================
   REGISTER USER
====================================== */

export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required",
      });

    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {

      return res.status(400).json({
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, and a number",
      });

    }

    const verifiedOtp =
  await prisma.oTP.findFirst({

    where: {
      email,
      verified: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

if (!verifiedOtp) {

  return res.status(400).json({
    message: "Please verify your email first",
  });

}

    const existingUser =
      await prisma.user.findUnique({

        where: {
          email,
        },

      });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
  await prisma.user.create({

    data: {
      name,
      email,
      password: hashedPassword,

      subscription: {
        create: {
          plan: "FREE",
          status: "ACTIVE",
        },
      },
    },

    include: {
      subscription: true,
    },

  });

    await prisma.oTP.deleteMany({

  where: {
    email,
  },

});

    // Fire-and-forget — never let email failure break registration
    sendEmail(
      user.email,
      "Welcome to DeutschFlow — here's how to get started 🇩🇪",
      welcomeHtml(user.name)
    ).catch(() => {});

    res.status(201).json({

      id: user.id,

      name: user.name,

      email: user.email,

      token: generateToken(user.id),

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ======================================
   LOGIN USER
====================================== */

export const loginUser = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        message:
          "Please enter email and password",
      });

    }

    const user =
      await prisma.user.findUnique({

        where: {
          email,
        },

      });

    if (!user) {

      return res.status(400).json({
        message:
          "Incorrect email or password. Please try again.",
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message:
          "Incorrect email or password. Please try again.",
      });

    }

    res.json({

      id: user.id,

      name: user.name,

      email: user.email,

      token: generateToken(user.id),

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};