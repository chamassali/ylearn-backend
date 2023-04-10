/*
  Warnings:

  - Added the required column `type` to the `Exercice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EXERCICE_TYPE" AS ENUM ('VIRTUAL_MACHINE', 'CONSOLE');

-- AlterTable
ALTER TABLE "Exercice" ADD COLUMN     "type" "EXERCICE_TYPE" NOT NULL;
