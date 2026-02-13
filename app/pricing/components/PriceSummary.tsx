"use client";

import { useEffect, useState } from "react";

type PriceResponse = {
  systemPriceExGst: number;
  extrasTotalExGst: number;
  subtotalExGst: number;
  gst: number;
  totalIncGst: number;
};

export default function PriceSummary({
  region,
  systemId,
  extraIds,
}: {
  region: string;
  systemId: string;
  extraIds: string[];
}) {
  const [price, setPrice] = useState<PriceResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!region || !systemId) return;

    setLoading(true);

    fetch("/api/pricing/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        regionCode: region,
        systemId,
        extraIds,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPrice(data))
      .finally(() => setLoading(false));
  }, [region, systemId, extraIds]);

  if (!systemId) return null;
  if (loading) return <p className="mt-6 text-gray-500">Calculating price…</p>;
  if (!price) return null;

  const money = (value: number) =>
    value.toLocaleString("en-AU", { minimumFractionDigits: 0 });

  return (
    <div className="mt-8 border rounded-lg p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Price Summary</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>System price (ex-GST)</span>
          <span>${money(price.systemPriceExGst)}</span>
        </div>

        <div className="flex justify-between">
          <span>Extras total (ex-GST)</span>
          <span>${money(price.extrasTotalExGst)}</span>
        </div>

        <div className="flex justify-between font-medium">
          <span>Subtotal (ex-GST)</span>
          <span>${money(price.subtotalExGst)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>GST (10%)</span>
          <span>${money(price.gst)}</span>
        </div>

        <div className="flex justify-between text-lg font-bold border-t pt-3">
          <span>Total (inc-GST)</span>
          <span>${money(price.totalIncGst)}</span>
        </div>
      </div>
    </div>
  );
}
