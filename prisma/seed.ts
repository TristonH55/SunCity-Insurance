// import "dotenv/config";
// import { prisma } from "../src/lib/prisma";

// async function main() {
//   console.log("🌱 Seeding regions...");

//   const regions = [
//     { code: "sunshine_coast", name: "Sunshine Coast" },
//     { code: "brisbane_northside", name: "Brisbane Northside" },
//     { code: "brisbane_southside", name: "Brisbane Southside" },
//     { code: "gold_coast", name: "Gold Coast" },
//     { code: "wide_bay", name: "Wide Bay" },
//   ];

//   for (const region of regions) {
//     await prisma.region.upsert({
//       where: { code: region.code },
//       update: {},
//       create: region,
//     });
//   }

//   console.log("✅ Regions seeded");
// }



// main()
//   .finally(() => prisma.$disconnect());

//   async function seedElectricSystems(prisma: any) {
//     console.log("🌱 Seeding electric systems...");
  
//     const systems = [
//       // =========================
//       // AquaMAX / Vulcan – Mild Steel
//       // =========================
//       { brand: "AquaMAX / Vulcan", model: "Electric 50L Mild Steel",  systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 50,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 80L Mild Steel",  systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 80,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 125L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 125, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 160L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 160, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 250L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 250, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 315L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 315, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
//       { brand: "AquaMAX / Vulcan", model: "Electric 400L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 400, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
  
//       // =========================
//       // Dux / Thermann – Mild Steel
//       // =========================
//       { brand: "Dux / Thermann", model: "Electric 50L Mild Steel",  systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 50,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 80L Mild Steel",  systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 80,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 125L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 125, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 160L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 160, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 250L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 250, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 315L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 315, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
//       { brand: "Dux / Thermann", model: "Electric 400L Mild Steel", systemType: "electric", tankMaterial: "mild_steel", capacityLitres: 400, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
  
//       // =========================
//       // Rheem Stellar – Stainless Steel
//       // =========================
//       { brand: "Rheem Stellar", model: "Electric 50L Stainless",  systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 50,  warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//       { brand: "Rheem Stellar", model: "Electric 80L Stainless",  systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 80,  warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//       { brand: "Rheem Stellar", model: "Electric 125L Stainless", systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 125, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//       { brand: "Rheem Stellar", model: "Electric 160L Stainless", systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 160, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//       { brand: "Rheem Stellar", model: "Electric 250L Stainless", systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 250, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//       { brand: "Rheem Stellar", model: "Electric 315L Stainless", systemType: "electric", tankMaterial: "stainless_steel", capacityLitres: 315, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
//     ];
  
//     for (const system of systems) {
//       await prisma.system.upsert({
//         where: { model: system.model },
//         update: system,
//         create: system,
//       });
//     }
  
//     console.log("✅ Electric systems seeded");
//   }
  
import { SystemType, TankMaterial } from "@prisma/client";
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

// =========================
// Seed Regions
// =========================
async function seedRegions() {
  console.log("🌱 Seeding regions...");

  const regions = [
    { code: "sunshine_coast", name: "Sunshine Coast" },
    { code: "brisbane_northside", name: "Brisbane Northside" },
    { code: "brisbane_southside", name: "Brisbane Southside" },
    { code: "gold_coast", name: "Gold Coast" },
    { code: "wide_bay", name: "Wide Bay" },
  ];

  for (const region of regions) {
    await prisma.region.upsert({
      where: { code: region.code },
      update: {},
      create: region,
    });
  }

  console.log("✅ Regions seeded");
}


// =========================
// Seed Electric Systems
// =========================
async function seedElectricSystems() {
  console.log("🌱 Seeding electric systems...");

  const systems = [
    // =========================
    // AquaMAX / Vulcan – Mild Steel
    // =========================
    { brand: "AquaMAX / Vulcan", model: "Electric 50L Mild Steel",  systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 50,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 80L Mild Steel",  systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 80,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 125L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 125, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 160L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 160, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 250L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 250, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 315L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 315, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },
    { brand: "AquaMAX / Vulcan", model: "Electric 400L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Rheem manufactured system", active: true },

    // =========================
    // Dux / Thermann – Mild Steel
    // =========================
    { brand: "Dux / Thermann", model: "Electric 50L Mild Steel",  systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 50,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 80L Mild Steel",  systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 80,  warrantyPrimaryYears: 7,  warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 125L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 125, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 160L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 160, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 250L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 250, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 315L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 315, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },
    { brand: "Dux / Thermann", model: "Electric 400L Mild Steel", systemType: SystemType.electric, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Equivalent to Dux manufactured system", active: true },

    // =========================
    // Rheem Stellar – Stainless Steel
    // =========================
    { brand: "Rheem Stellar", model: "Electric 50L Stainless",  systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 50,  warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
    { brand: "Rheem Stellar", model: "Electric 80L Stainless",  systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 80,  warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
    { brand: "Rheem Stellar", model: "Electric 125L Stainless", systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 125, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
    { brand: "Rheem Stellar", model: "Electric 160L Stainless", systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 160, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
    { brand: "Rheem Stellar", model: "Electric 250L Stainless", systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 250, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
    { brand: "Rheem Stellar", model: "Electric 315L Stainless", systemType: SystemType.electric, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 315, warrantyPrimaryYears: 12, warrantySecondaryYears: null, notes: "Stainless steel tank", active: true },
  ];

  await prisma.system.createMany({
    data: systems,
    skipDuplicates: true,
  });

  console.log("✅ Electric systems seeded");
}


// =========================
// MAIN
// =========================
async function main() {
  await seedRegions();
  await seedElectricSystems();
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
