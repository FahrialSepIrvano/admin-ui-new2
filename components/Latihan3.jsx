// src/assets/components/Latihan3.jsx
import React from 'react';
import PricingCard from './PricingCard.jsx';

export default function Latihan3() {
  return (
    <section className="p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 3: Pricing Table</h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
        <PricingCard plan="Basic" price="Rp 50.000" />
        <PricingCard plan="Pro" price="Rp 100.000" isFeatured />
        <PricingCard plan="Premium" price="Rp 200.000" />
      </div>
    </section>
  );
}
