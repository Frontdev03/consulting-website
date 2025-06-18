"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">ConsultingCo</Link>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6 text-base font-medium">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/team">Team</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 py-4 space-y-2">
          <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="block" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/industries" className="block" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link href="/case-studies" className="block" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <Link href="/team" className="block" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/blog" className="block" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/careers" className="block" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
} 