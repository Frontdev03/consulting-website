"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center">
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow border border-gray-100">
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">Name</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" id="name" name="name" required />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="email">Email</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" id="email" name="email" type="email" required />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="message">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2" id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
        </form>
      )}
    </div>
  );
} 