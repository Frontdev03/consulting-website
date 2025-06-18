"use client";
import React from "react";

const jobs = [
  {
    title: "Senior Consultant",
    location: "Remote",
    description: "Lead client projects and deliver high-impact solutions.",
  },
  {
    title: "Business Analyst",
    location: "New York, NY",
    description: "Analyze business processes and support consulting teams.",
  },
];

export default function CareersPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Careers</h1>
      <div className="space-y-6 sm:space-y-8">
        {jobs.map((job) => (
          <div key={job.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-lg sm:text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-500 mb-1 text-sm sm:text-base">{job.location}</p>
            <p className="text-gray-600 text-sm sm:text-base">{job.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full sm:w-auto">Apply Now</button>
          </div>
        ))}
      </div>
    </main>
  );
} 