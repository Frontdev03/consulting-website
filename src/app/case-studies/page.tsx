"use client";
import React from "react";

const caseStudies = [
  {
    title: "Digital Transformation for Fintech",
    summary: "Helped a fintech company modernize their platform, resulting in 40% faster transactions.",
  },
  {
    title: "Healthcare Workflow Optimization",
    summary: "Streamlined hospital operations, reducing patient wait times by 30%.",
  },
  {
    title: "Retail E-commerce Growth",
    summary: "Enabled a retail client to double their online sales in 6 months.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>
      <div className="space-y-8">
        {caseStudies.map((cs) => (
          <div key={cs.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{cs.title}</h2>
            <p className="text-gray-600">{cs.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 