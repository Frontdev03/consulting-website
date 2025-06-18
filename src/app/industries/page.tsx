"use client";
import React from "react";

const industries = [
  { name: "Healthcare", description: "Consulting for hospitals, clinics, and health tech." },
  { name: "Finance", description: "Banking, insurance, and fintech solutions." },
  { name: "Technology", description: "IT, SaaS, and digital transformation." },
  { name: "Retail", description: "E-commerce and brick-and-mortar retail consulting." },
  { name: "Manufacturing", description: "Process optimization and supply chain." },
];

export default function IndustriesPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Industries We Serve</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div key={industry.name} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{industry.name}</h2>
            <p className="text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 