"use client";
import React from "react";

const posts = [
  {
    title: "5 Consulting Trends in 2024",
    excerpt: "Stay ahead with these top consulting trends shaping the industry this year.",
    date: "2024-06-01",
  },
  {
    title: "How to Maximize ROI from Consulting Services",
    excerpt: "Tips and strategies to get the most value from your consulting partners.",
    date: "2024-05-15",
  },
  {
    title: "Digital Transformation: A Roadmap",
    excerpt: "A step-by-step guide to successful digital transformation projects.",
    date: "2024-05-01",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Blog & Insights</h1>
      <div className="space-y-6 sm:space-y-8">
        {posts.map((post) => (
          <div key={post.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-lg sm:text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-1">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 