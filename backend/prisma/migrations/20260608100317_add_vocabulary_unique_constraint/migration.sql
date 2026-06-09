/*
  Warnings:

  - A unique constraint covering the columns `[germanWord,englishMeaning,levelCode]` on the table `VocabularyWord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VocabularyWord_germanWord_englishMeaning_levelCode_key" ON "VocabularyWord"("germanWord", "englishMeaning", "levelCode");
