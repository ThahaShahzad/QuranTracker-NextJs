/*
  Warnings:

  - Added the required column `type` to the `VECPJWT` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JWTType" AS ENUM ('verifyEmail', 'ChangePassword');

-- AlterTable
ALTER TABLE "VECPJWT" ADD COLUMN     "type" "JWTType" NOT NULL;
