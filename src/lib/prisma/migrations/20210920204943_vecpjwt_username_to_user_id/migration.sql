/*
  Warnings:

  - You are about to drop the column `userName` on the `VECPJWT` table. All the data in the column will be lost.
  - Added the required column `userId` to the `VECPJWT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VECPJWT" DROP COLUMN "userName",
ADD COLUMN     "userId" TEXT NOT NULL;
