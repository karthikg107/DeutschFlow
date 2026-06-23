import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";

export const resetPassword = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body;

    const user =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
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
    message: "Please verify OTP first",
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

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await prisma.user.update({

      where: {
        email,
      },

      data: {
        password: hashedPassword,
      },

    });

    await prisma.oTP.deleteMany({

      where: {
        email,
      },

    });

    res.json({
      message:
        "Password updated successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};