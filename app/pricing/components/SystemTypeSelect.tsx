"use client";

const OPTIONS = [
  { value: "electric", label: "Electric" },
  { value: "heat_pump", label: "Heat Pump" },
  { value: "solar", label: "Solar" },
];

export default function SystemTypeSelect({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (val: string) => void;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>System Type</label>
      <br />
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select system type</option>
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
