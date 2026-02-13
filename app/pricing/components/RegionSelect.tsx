"use client";

import { useEffect, useState } from "react";

type Region = {
  code: string;
  name: string;
};

export default function RegionSelect({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (val: string) => void;
}) {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    fetch("/api/pricing/regions")
      .then((res) => res.json())
      .then(setRegions);
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Region</label>
      <br />
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select region</option>
        {regions.map((r) => (
          <option key={r.code} value={r.code}>
            {r.name}
          </option>
        ))}
      </select>
    </div>
  );
}
