"use client";
import React from "react";

const team = [
  { name: "Alice Johnson", role: "CEO", bio: "Visionary leader with 15+ years in consulting." },
  { name: "Bob Smith", role: "CTO", bio: "Tech expert and digital transformation specialist." },
  { name: "Carol Lee", role: "Lead Consultant", bio: "Expert in business process optimization." },
];

export default function TeamPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-500 mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 