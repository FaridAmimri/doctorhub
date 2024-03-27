/*
  Warnings:

  - You are about to drop the column `note` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `doctorAdress` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorName` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "note",
ADD COLUMN     "doctorAdress" TEXT NOT NULL,
ADD COLUMN     "doctorName" TEXT NOT NULL;
