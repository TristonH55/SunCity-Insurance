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
// HEAT PUMPS
// =========================


// =========================
// Seed Heat Pump Systems
// =========================
async function seedHeatPumpSystems() {
  console.log("🌱 Seeding heat pump systems...");

  const systems = [
    // =========================
    // Rheem Ambipower – Mild Steel
    // =========================
    { brand: "Rheem Ambipower", model: "Heat Pump 180L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 180, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: null, active: true },
    { brand: "Rheem Ambipower", model: "Heat Pump 280L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 280, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: null, active: true },

    // =========================
    // iStore – Mild Steel
    // =========================
    { brand: "iStore", model: "Heat Pump 180L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 180, warrantyPrimaryYears: 5, warrantySecondaryYears: null, notes: "Rheem all-in-one system", active: true },
    { brand: "iStore", model: "Heat Pump 270L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 270, warrantyPrimaryYears: 5, warrantySecondaryYears: null, notes: "Rheem all-in-one system", active: true },

    // =========================
    // Envirosun – Mild Steel
    // =========================
    { brand: "Envirosun", model: "Heat Pump 180L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 180, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: null, active: true },
    { brand: "Envirosun", model: "Heat Pump 330L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 330, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: null, active: true },

    // =========================
    // Stiebel Eltron / Thermann – Mild Steel
    // =========================
    { brand: "Stiebel Eltron / Thermann", model: "Heat Pump 50L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 50, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: "Equivalent Stiebel Eltron system", active: true },
    { brand: "Stiebel Eltron / Thermann", model: "Heat Pump 80L Mild Steel", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.mild_steel, capacityLitres: 80, warrantyPrimaryYears: 7, warrantySecondaryYears: null, notes: "Equivalent Stiebel Eltron system", active: true },

    // =========================
    // OMNI X – Stainless Steel
    // =========================
    { brand: "OMNI X", model: "Heat Pump 180L Stainless", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 180, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: null, active: true },
    { brand: "OMNI X", model: "Heat Pump 250L Stainless", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 250, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: null, active: true },
    { brand: "OMNI X", model: "Heat Pump 340L Stainless", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 340, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: null, active: true },
    { brand: "OMNI X", model: "Heat Pump 420L Stainless", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 420, warrantyPrimaryYears: 10, warrantySecondaryYears: null, notes: null, active: true },

    // =========================
    // Reclaim / Sanden – Stainless Steel (Split)
    // =========================
    { brand: "Reclaim / Sanden", model: "Heat Pump 250L Stainless Split", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 250, warrantyPrimaryYears: 15, warrantySecondaryYears: null, notes: "Panasonic split system", active: true },
    { brand: "Reclaim / Sanden", model: "Heat Pump 315L Stainless Split", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 315, warrantyPrimaryYears: 15, warrantySecondaryYears: null, notes: "Panasonic split system", active: true },
    { brand: "Reclaim / Sanden", model: "Heat Pump 400L Stainless Split", systemType: SystemType.heat_pump, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 400, warrantyPrimaryYears: 15, warrantySecondaryYears: null, notes: "Panasonic split system", active: true },
  ];

  await prisma.system.createMany({
    data: systems,
    skipDuplicates: true,
  });

  console.log("✅ Heat pump systems seeded");
}


// =========================
// Seed Solar Systems
// =========================
async function seedSolarSystems() {
  console.log("🌱 Seeding solar systems...");

  const systems = [
    // =========================
    // THERMOSIPHON SOLAR SYSTEMS
    // =========================

    // Envirosun
    { brand: "Envirosun", model: "TS Plus 180L 1 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 180, warrantyPrimaryYears: 10, warrantySecondaryYears: 7, notes: "Thermosiphon – 1 panel", active: true },
    { brand: "Envirosun", model: "TS Plus 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 300, warrantyPrimaryYears: 10, warrantySecondaryYears: 7, notes: "Thermosiphon – 2 panel", active: true },
    { brand: "Envirosun", model: "THX Plus 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 300, warrantyPrimaryYears: 10, warrantySecondaryYears: 10, notes: "Thermosiphon – glycol / frost protected", active: true },

    // Rheem
    { brand: "Rheem", model: "Hi-Line 180L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.mild_steel, capacityLitres: 180, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Thermosiphon – 2 panel", active: true },
    { brand: "Rheem", model: "Hi-Line Premier 52L 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 300, warrantyPrimaryYears: 10, warrantySecondaryYears: 7, notes: "Thermosiphon – Premier stainless", active: true },

    // Rinnai
    { brand: "Rinnai", model: "Prestige 330L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 330, warrantyPrimaryYears: 10, warrantySecondaryYears: 7, notes: "Thermosiphon – 2 panel", active: true },

    // Solahart
    { brand: "Solahart", model: "L Series 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.mild_steel, capacityLitres: 300, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Thermosiphon – 2 panel", active: true },
    { brand: "Solahart", model: "J Series 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.mild_steel, capacityLitres: 300, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Thermosiphon – glycol / frost protected", active: true },

    // Sunrain
    { brand: "Sunrain", model: "MK11 300L 2 Panel", systemType: SystemType.solar_thermosiphon, tankMaterial: TankMaterial.stainless_steel, capacityLitres: 300, warrantyPrimaryYears: 7, warrantySecondaryYears: 5, notes: "Thermosiphon – Chinese made", active: true },

    // =========================
    // SPLIT SOLAR SYSTEMS
    // =========================

    // Envirosun
    { brand: "Envirosun", model: "AS 250L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 250, warrantyPrimaryYears: 7, warrantySecondaryYears: 7, notes: "Split solar – 2 panel", active: true },
    { brand: "Envirosun", model: "AS 315L 3 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 315, warrantyPrimaryYears: 7, warrantySecondaryYears: 7, notes: "Split solar – 3 panel", active: true },
    { brand: "Envirosun", model: "AS 400L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 7, warrantySecondaryYears: 7, notes: "Split solar – 2 panel", active: true },
    { brand: "Envirosun", model: "AS 400L 3 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 7, warrantySecondaryYears: 7, notes: "Split solar – 3 panel", active: true },

    // Rheem
    { brand: "Rheem", model: "Lo-Line 250L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 250, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Rheem", model: "Lo-Line 315L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 315, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Rheem", model: "Lo-Line 400L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Rheem", model: "Lo-Line 400L 3 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 3 panel", active: true },

    // Dux
    { brand: "Dux", model: "Ecosmart 250L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 250, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Dux", model: "Ecosmart 315L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 315, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Dux", model: "Ecosmart 400L 2 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 2 panel", active: true },
    { brand: "Dux", model: "Ecosmart 400L 3 Panel", systemType: SystemType.solar_split, tankMaterial: TankMaterial.mild_steel, capacityLitres: 400, warrantyPrimaryYears: 5, warrantySecondaryYears: 5, notes: "Split solar – 3 panel", active: true },
  ];

  await prisma.system.createMany({
    data: systems,
    skipDuplicates: true,
  });

  console.log("✅ Solar systems seeded");
}
// =========================
// EXTRAS
// =========================
import { ExtraSystemType } from "@prisma/client";

// =========================
// Seed Extras
// =========================
async function seedExtras() {
  console.log("🌱 Seeding extras...");

  const extras = [
    // =========================
    // ALL SYSTEMS
    // =========================
    { code: "electrical_isolator_rcd", name: "Electrical isolator & RCD", systemType: ExtraSystemType.all, notes: null, active: true },
    { code: "safe_tray_mildred_valve", name: "Safe tray / Mildred valve", systemType: ExtraSystemType.all, notes: null, active: true },
    { code: "remove_old_tank", name: "Remove old tank & disposal", systemType: ExtraSystemType.all, notes: null, active: true },
    { code: "concrete_base", name: "Concrete base (if required)", systemType: ExtraSystemType.all, notes: null, active: true },

    // =========================
    // SOLAR ONLY
    // =========================
    { code: "double_storey_highset", name: "Double storey / highset roof (crane included)", systemType: ExtraSystemType.solar, notes: null, active: true },
    { code: "two_visit_job", name: "2 visit job (disconnect & return)", systemType: ExtraSystemType.solar, notes: null, active: true },
    { code: "temporary_tank", name: "Temporary tank install (up to 30 days)", systemType: ExtraSystemType.solar, notes: null, active: true },
    { code: "cyclone_frame", name: "Cyclone frame (Wide Bay & above only)", systemType: ExtraSystemType.solar, notes: "Wide Bay & above only", active: true },
    { code: "flat_roof_frame", name: "Flat roof frame", systemType: ExtraSystemType.solar, notes: null, active: true },
    { code: "side_tilt_frame", name: "Side tilt frame (custom pitch)", systemType: ExtraSystemType.solar, notes: "Custom pitch, exclusions may apply", active: true },
  ];

  await prisma.extra.createMany({
    data: extras,
    skipDuplicates: true,
  });

  console.log("✅ Extras seeded");
}





// =========================
// MAIN
// =========================
async function main() {
  await seedRegions();
  await seedElectricSystems();
  await seedHeatPumpSystems();
  await seedSolarSystems();
  await seedExtras();
}




main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
