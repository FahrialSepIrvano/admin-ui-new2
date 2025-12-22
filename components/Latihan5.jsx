
import React from 'react';

export default function Latihan5() {
  return (
    <section className="p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 5: Product Card</h2>

      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 max-w-xl">
        <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0 flex items-center justify-center text-gray-500 text-sm">
          80 x 80
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Nama Produk</h3>
          <p className="text-gray-600 text-sm">
            Deskripsi produk singkat yang menarik perhatian pembeli.
          </p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">Rp 120.000</span>
            <button className="ml-4 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">
              Beli
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
