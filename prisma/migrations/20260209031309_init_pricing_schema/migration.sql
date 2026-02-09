-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'insurer');

-- CreateEnum
CREATE TYPE "SystemType" AS ENUM ('electric', 'heat_pump', 'solar_thermosiphon', 'solar_split');

-- CreateEnum
CREATE TYPE "TankMaterial" AS ENUM ('mild_steel', 'stainless_steel');

-- CreateEnum
CREATE TYPE "ExtraSystemType" AS ENUM ('electric', 'heat_pump', 'solar', 'all');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "System" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "systemType" "SystemType" NOT NULL,
    "tankMaterial" "TankMaterial" NOT NULL,
    "capacityLitres" INTEGER NOT NULL,
    "warrantyPrimaryYears" INTEGER NOT NULL,
    "warrantySecondaryYears" INTEGER,
    "notes" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "System_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemPrice" (
    "id" TEXT NOT NULL,
    "systemId" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SystemPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extra" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "systemType" "ExtraSystemType" NOT NULL,
    "notes" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExtraPrice" (
    "id" TEXT NOT NULL,
    "extraId" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ExtraPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Region_code_key" ON "Region"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Extra_code_key" ON "Extra"("code");

-- AddForeignKey
ALTER TABLE "SystemPrice" ADD CONSTRAINT "SystemPrice_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "System"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemPrice" ADD CONSTRAINT "SystemPrice_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExtraPrice" ADD CONSTRAINT "ExtraPrice_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExtraPrice" ADD CONSTRAINT "ExtraPrice_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
