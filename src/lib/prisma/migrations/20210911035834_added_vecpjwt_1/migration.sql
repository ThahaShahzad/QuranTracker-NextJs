/*
  Warnings:

  - Added the required column `userName` to the `VECPJWT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VECPJWT" ADD COLUMN     "userName" TEXT NOT NULL;
