import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pkg from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const { PrismaClient } = pkg;

import a1Grammar from "../data/grammar/a1.js";
import a1Sections from "../data/grammar/a1Sections.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // =========================
  // CREATE LEVEL
  // =========================

  const a1Level = await prisma.level.upsert({
    where: {
      code: "A1",
    },

    update: {},

    create: {
      code: "A1",
      title: "Beginner A1",
      order: 1,
    },
  });

  // =========================
  // CREATE TOPICS
  // =========================

  for (const topic of a1Grammar) {
    await prisma.topic.upsert({
      where: {
        slug: topic.slug,
      },

      update: {},

      create: {
        levelId: a1Level.id,

        title: topic.title,
        slug: topic.slug,
        description: topic.description,

        order: topic.order,
      },
    });
  }

  console.log("Topics seeded.");

  // =========================
  // CREATE SECTIONS
  // =========================

    // =========================
  // CREATE SECTIONS
  // =========================

  for (const item of a1Sections) {
    const topic = await prisma.topic.findUnique({
      where: {
        slug: item.topicSlug,
      },
    });

    if (!topic) continue;

    for (const [index, section] of item.sections.entries()) {
      await prisma.topicSection.upsert({
        where: {
          topicId_order: {
            topicId: topic.id,
            order: index + 1,
          },
        },

        update: {
          title: section.title,
          type: section.type,
          content: section.content,
        },

        create: {
          topicId: topic.id,

          title: section.title,
          type: section.type,
          content: section.content,

          order: index + 1,
        },
      });
    }
  }

  console.log("Sections seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });