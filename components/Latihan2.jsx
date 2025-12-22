
import React from 'react';

export default function Latihan2() {
  const items = Array.from({ length: 6 });

  return (
    <section className="p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 2: Galeri</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((_, i) => {
          const idx = i + 1;
          const src = `/images/${idx}.jpg`;
          const fallback = 'https://via.placeholder.com/400';
          return (
            <div key={i} className="rounded-md overflow-hidden bg-gray-100">
              <img
                src={src}
                alt={`Gambar contoh ${idx}`}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = fallback)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
