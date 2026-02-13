// "use client";

// import { useEffect, useState } from "react";

// type System = {
//   systemId: string;
//   brand: string;
//   model: string;
//   capacityLitres: number;
//   tankMaterial: string;
//   priceExGst: number;
// };

// export default function SystemList({
//   region,
//   systemType,
//   selectedSystemId,
//   onSelect,
// }: {
//   region: string;
//   systemType: string;
//   selectedSystemId: string | null;
//   onSelect: (id: string) => void;
// }) {
//   const [systems, setSystems] = useState<System[]>([]);

//   useEffect(() => {
//     fetch(`/api/pricing/systems?region=${region}&type=${systemType}`)
//       .then((res) => res.json())
//       .then(setSystems);
//   }, [region, systemType]);

//   if (!systems.length) {
//     return <p>No systems found.</p>;
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mt-6 mb-4">
//         Available Hot Water Systems (ex-GST)
//       </h2>

//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         {systems.map((s) => {
//           const isSelected = selectedSystemId === s.systemId;

//           return (     
//             <div
//   key={s.systemId}
//   onClick={() => onSelect(s.systemId)}
//   className={`p-4 rounded-lg cursor-pointer transition border
//     ${
//       isSelected
//         ? "border-2 border-[#db231f] bg-red-50"
//         : "border-gray-300 bg-white hover:border-gray-400"
//     }
//   `}
// >

//               <div className="font-semibold text-lg">
//               {s.brand}
//               </div>
//               <br />
//               {s.model}
//               <br />
//               {s.capacityLitres}L • {s.tankMaterial.replace("_", " ")}
//               <br />
//               <strong>${s.priceExGst.toLocaleString()} ex-GST</strong>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

type System = {
  systemId: string;
  brand: string;
  model: string;
  capacityLitres: number;
  tankMaterial: string;
  priceExGst: number;
};

export default function SystemList({
  region,
  systemType,
  selectedSystemId,
  onSelect,
}: {
  region: string;
  systemType: string;
  selectedSystemId: string | null;
  onSelect: (id: string) => void;
}) {
  const [systems, setSystems] = useState<System[]>([]);

  useEffect(() => {
    fetch(`/api/pricing/systems?region=${region}&type=${systemType}`)
      .then((res) => res.json())
      .then(setSystems);
  }, [region, systemType]);

  if (!systems.length) {
    return <p>No systems found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-4">
        Available Hot Water Systems (ex-GST)
      </h2>

      <div className="flex flex-col gap-4">
        {systems.map((s) => {
          const isSelected = selectedSystemId === s.systemId;

          return (
            <div
              key={s.systemId}
              onClick={() => onSelect(s.systemId)}
              className={`relative p-4 rounded-lg cursor-pointer transition border
                ${
                  isSelected
                    ? "border-2 border-[#db231f] bg-red-50"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }
              `}
            >
              {/* ✅ Selected badge */}
              {isSelected && (
                <div className="absolute top-3 right-3 flex items-center gap-2 text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                  Selected
                </div>
              )}

              <div className="font-semibold text-lg">{s.brand}</div>

              <div className="mt-1 text-gray-700">{s.model}</div>

              <div className="text-sm text-gray-600 mt-1">
                {s.capacityLitres}L • {s.tankMaterial.replace("_", " ")}
              </div>

              <div className="mt-2 font-semibold text-gray-900">
                ${s.priceExGst.toLocaleString()} ex-GST
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
