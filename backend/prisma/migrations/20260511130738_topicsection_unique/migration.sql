/*
  Warnings:

  - You are about to drop the `GrammarTopic` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[topicId,order]` on the table `TopicSection` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE "GrammarTopic";

-- CreateIndex
CREATE UNIQUE INDEX "TopicSection_topicId_order_key" ON "TopicSection"("topicId", "order");
