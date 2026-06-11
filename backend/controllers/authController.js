import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";
import generateToken from "../utils/generateToken.js";

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
        },

      });

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