import jwt from "jsonwebtoken";

import prisma from "../prisma/prismaClient.js";

const protect = async (req, res, next) => {

  try {

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer")
    ) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Token failed",
    });
  }
};

export default protect;