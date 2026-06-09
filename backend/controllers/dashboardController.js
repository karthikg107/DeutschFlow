import prisma from "../prisma/prismaClient.js";

export const getDashboardData = async (
  req,
  res
) => {

  try {

    const userId = req.user.id;

    // user
    const user =
      await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

    // completed lessons
    const completedLessons =
      await prisma.lessonProgress.count({
        where: {
          userId,
          completed: true,
        },
      });

    // total lessons
    const totalLessons =
      await prisma.topic.count();

    // latest completed lesson
    const latestProgress =
      await prisma.lessonProgress.findFirst({
        where: {
          userId,
          completed: true,
        },

        orderBy: {
          updatedAt: "desc",
        },
      });

    // continue learning topic
    let continueLearning = null;

    if (latestProgress) {

      const currentTopic =
        await prisma.topic.findUnique({
          where: {
            slug: latestProgress.lessonSlug,
          },
        });

      if (currentTopic) {

        continueLearning =
          await prisma.topic.findFirst({
            where: {
              order: {
                gt: currentTopic.order,
              },
            },

            orderBy: {
              order: "asc",
            },
          });
      }
    }

    const progressPercentage =
      totalLessons > 0
        ? Math.round(
            (completedLessons / totalLessons) * 100
          )
        : 0;

    res.json({

      user: {
        xp: user.xp,
        streak: user.streak,
      },

      stats: {
        completedLessons,
        totalLessons,
        progressPercentage,
      },

      continueLearning,

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};