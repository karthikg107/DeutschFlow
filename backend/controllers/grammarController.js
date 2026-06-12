import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();


// =========================
// GET ALL LEVELS
// =========================

export const getAllLevels = async (req, res) => {
  try {
    const levels = await prisma.level.findMany({
      include: {
        topics: {
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            order: true,
          },

          orderBy: {
            order: "asc",
          },
        },
      },

      orderBy: {
        order: "asc",
      },
    });

    res.json(levels);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch levels",
    });
  }
};

// =========================
// GET TOPICS BY LEVEL
// =========================

export const getTopicsByLevel = async (req, res) => {
  try {
    const { level } = req.params;

    const data = await prisma.level.findUnique({
      where: {
        code: level.toUpperCase(),
      },

      include: {
        topics: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });

    if (!data) {
      return res.status(404).json({
        error: "Level not found",
      });
    }

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch level topics",
    });
  }
};


// =========================
// GET SINGLE TOPIC
// =========================

export const getTopicBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const topic = await prisma.topic.findUnique({
      where: {
        slug,
      },

      include: {
        sections: {
          orderBy: {
            order: "asc",
          },
        },

        exercises: {
          include: {
            options: true,
          },
        },
      },
    });

    if (!topic) {
      return res.status(404).json({
        error: "Topic not found",
      });
    }

    res.json(topic);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch topic",
    });
  }
};