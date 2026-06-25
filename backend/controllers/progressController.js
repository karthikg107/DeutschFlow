import prisma from "../prisma/prismaClient.js";

export const saveProgress = async (
  req,
  res
) => {

  try {

    const { lessonSlug } = req.body;

    // check existing progress
    const existingProgress =
      await prisma.lessonProgress.findUnique({
        where: {
          userId_lessonSlug: {
            userId: req.user.id,
            lessonSlug,
          },
        },
      });

    // save progress
    const progress =
      await prisma.lessonProgress.upsert({
        where: {
          userId_lessonSlug: {
            userId: req.user.id,
            lessonSlug,
          },
        },

        update: {
          completed: true,
        },

        create: {
          userId: req.user.id,
          lessonSlug,
          completed: true,
        },
      });

    // only reward XP if lesson completed first time
    if (!existingProgress) {

      const xpReward =
        lessonSlug.startsWith("pronunciation-") ? 8  :
        lessonSlug.startsWith("scenario-")      ? 12 :
        lessonSlug.startsWith("talk-with-mia")  ? 15 : 10;

      const user =
        await prisma.user.findUnique({
          where: {
            id: req.user.id,
          },
        });

      const today = new Date();

      const lastActive =
        user.lastActiveDate
          ? new Date(user.lastActiveDate)
          : null;

      let streak = user.streak;

      // normalize dates
      const todayDate =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );

      const lastDate =
        lastActive
          ? new Date(
              lastActive.getFullYear(),
              lastActive.getMonth(),
              lastActive.getDate()
            )
          : null;

      const diffDays =
        lastDate
          ? Math.floor(
              (todayDate - lastDate)
              / (1000 * 60 * 60 * 24)
            )
          : null;

      // streak logic
      if (diffDays === 1) {
        streak += 1;
      }

      else if (diffDays > 1 || diffDays === null) {
        streak = 1;
      }

      // same day => no streak increase

      await prisma.user.update({
        where: {
          id: req.user.id,
        },

        data: {
          xp: {
            increment: xpReward,
          },

          streak,

          lastActiveDate: today,
        },
      });
    }

    res.json(progress);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProgress = async (
  req,
  res
) => {

  try {

    const progress =
      await prisma.lessonProgress.findMany({
        where: {
          userId: req.user.id,
        },
      });

    res.json(progress);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};