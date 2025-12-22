
import React from 'react';

export default function Latihan4() {
  return (
    <section className="p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 4: Main Layout</h2>

      <div className="text-gray-700 h-[600px] grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto] gap-4">
        <header className="md:col-span-2 bg-gray-300 p-4 rounded-md">Header</header>
        <aside className="bg-gray-300 p-4 rounded-md">Sidebar</aside>
        <main className="bg-white border-2 border-dashed p-4 rounded-md overflow-auto">
          Content area. Letakkan artikel / komponen di sini.
        </main>
        <footer className="md:col-span-2 bg-gray-300 p-4 rounded-md">Footer</footer>
      </div>
    </section>
  );
}
