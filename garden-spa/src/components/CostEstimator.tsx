import React, { useState } from 'react';

interface Props {
  price: number;
}

export const CostEstimator: React.FC<Props> = ({ price }) => {
  const [area, setArea] = useState<number>(0);
  const total = (area || 0) * price;

  return (
    <div className="space-y-2">
      <label className="block text-sm">Area (m²)</label>
      <input
        type="number"
        value={area}
        onChange={(e) => setArea(parseFloat(e.target.value))}
        className="w-full border rounded p-2"
        min="0"
      />
      <p className="text-sm">Estimated cost: <strong>{total.toFixed(2)} PLN</strong></p>
    </div>
  );
};
