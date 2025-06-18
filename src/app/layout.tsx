import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consulting Experts | Business Consulting Services",
  description: "Professional consulting services for business strategy, digital transformation, and market analysis.",
  keywords: ["consulting", "business", "strategy", "digital transformation", "market analysis"],
  openGraph: {
    title: "Consulting Experts | Business Consulting Services",
    description: "Professional consulting services for business strategy, digital transformation, and market analysis.",
    type: "website",
    url: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <footer className="bg-white border-t mt-12 py-8 text-center text-gray-500 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div>© {new Date().getFullYear()} ConsultingCo. All rights reserved.</div>
            <div className="space-x-4 mt-2 md:mt-0">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
