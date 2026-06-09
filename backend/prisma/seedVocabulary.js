import fs from "fs";

import path from "path";

import prisma from "./prismaClient.js";

const vocabularyPath =
  path.join(
    process.cwd(),
    "data",
    "vocabulary"
  );

async function main() {

  const files =
    fs.readdirSync(vocabularyPath);


  for (const file of files) {

    try {

      const filePath =
        path.join(vocabularyPath, file);

      const rawData =
        fs.readFileSync(filePath);

      const words =
        JSON.parse(rawData);

      console.log(`FOUND ${words.length} words in ${file}`);

     const result = await prisma.vocabularyWord.createMany({
  data: words,
  skipDuplicates: true,
});

console.log("Inserted:", result.count);

      console.log(`SEEDED ${file}`);

    } catch (error) {

      console.log("ERROR IN FILE:", file);

      console.error(error);

    }

  }
}

main()
  .catch((e) => {

    console.error(e);
  
  })
  .finally(async () => {

    await prisma.$disconnect();

  });