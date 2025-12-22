import React from 'react';

export default function PricingCard({ plan, price, isFeatured = false }) {
  const base = 'p-6 rounded-lg text-center w-full md:w-1/3 transform';
  const style = isFeatured
    ? `${base} bg-blue-500 text-white shadow-xl scale-105`
    : `${base} bg-gray-100 text-gray-800 shadow-sm`;

  return (
    <div className={style} role="region" aria-label={`${plan} plan`}>
      <h3 className="text-lg font-semibold">{plan}</h3>
      <p className="mt-2 text-2xl font-bold">{price}</p>
      <p className="text-sm mt-2">{isFeatured ? 'Best value' : 'Popular'}</p>
      <button
        className={`mt-4 px-4 py-2 rounded transition ${
          isFeatured
            ? 'bg-white text-blue-600 hover:bg-blue-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Pilih
      </button>
    </div>
  );
}
