
'use client';
import React, { useState } from 'react';

export default function Latihan1() {
  const [open, setOpen] = useState(false);

  return (
    <section className="p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 1: Header</h2>

      <nav className="bg-white p-4 shadow-md rounded-md" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">MyLogo</div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
            >
              Contact
            </a>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
            <div className="w-6 h-0.5 bg-gray-700 mb-1" />
            <div className="w-6 h-0.5 bg-gray-700 mb-1" />
            <div className="w-6 h-0.5 bg-gray-700" />
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden mt-2 space-y-1 px-2">
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-900 py-2 px-2 rounded"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-900 py-2 px-2 rounded"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-900 py-2 px-2 rounded"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </section>
  );
}
