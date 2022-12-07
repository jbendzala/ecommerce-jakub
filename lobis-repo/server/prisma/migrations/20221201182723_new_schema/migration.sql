/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `businessId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userId",
ADD COLUMN     "businessId" TEXT NOT NULL,
ADD COLUMN     "description" VARCHAR(1028),
ADD COLUMN     "images" TEXT[];

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1028),
    "images" TEXT[],
    "belongsToId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_belongsToId_key" ON "Business"("belongsToId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
