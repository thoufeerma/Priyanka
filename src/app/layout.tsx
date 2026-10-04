import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Priyanka N P",
  description: "Biomedical Innovation & Research Portfolio",
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased`}
    >
      <body className="flex flex-col">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
