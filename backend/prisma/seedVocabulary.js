import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load .env from backend root regardless of where script is run from
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

import prisma from "./prismaClient.js";

const vocabularyPath = path.join(__dirname, "..", "data", "vocabulary");

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