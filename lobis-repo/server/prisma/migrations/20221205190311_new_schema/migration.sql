/*
  Warnings:

  - You are about to drop the column `belongsToId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `businessId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "belongsToId",
ADD COLUMN     "businessId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
