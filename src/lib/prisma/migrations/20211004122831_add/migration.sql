-- AlterTable
ALTER TABLE "User" ADD COLUMN     "initalAccountCreation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
