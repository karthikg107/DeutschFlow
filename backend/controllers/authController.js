import bcrypt from "bcryptjs";
import prisma from "../prisma/prismaClient.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    // required fields
    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {

      return res.status(400).json({
        message:
          "Password must be 8+ characters and include uppercase, lowercase, and number",
      });
    }

    // duplicate email check
    const existingUser =
      await prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // create user
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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
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