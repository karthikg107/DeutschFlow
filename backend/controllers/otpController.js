import prisma from "../prisma/prismaClient.js";
import { generateOTP } from "../utils/generateOTP.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendOtp = async (
  req,
  res
) => {

  try {

    const { email } = req.body;

    if (!email) {

      return res.status(400).json({
        message: "Email required",
      });

    }

    const code = generateOTP();

    const expiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await prisma.oTP.create({

      data: {
        email,
        code,
        expiresAt,
      },

    });

    await sendEmail(

      email,

      "DeutschFlow Verification Code",

      `
        <h2>Your OTP Code</h2>
        <h1>${code}</h1>
        <p>Valid for 10 minutes.</p>
      `

    );

    res.json({
      message: "OTP sent",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to send OTP",
    });

  }

};

export const verifyOtp = async (
  req,
  res
) => {

  try {

    const { email, otp } = req.body;

    const record =
      await prisma.oTP.findFirst({

        where: {
          email,
          code: otp,
        },

        orderBy: {
          createdAt: "desc",
        },

      });

    if (!record) {

      return res.status(400).json({
        message: "Invalid OTP",
      });

    }

    if (
      new Date() >
      record.expiresAt
    ) {

      return res.status(400).json({
        message: "OTP expired",
      });

    }

    res.json({
      verified: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Verification failed",
    });

  }

};