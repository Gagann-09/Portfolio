import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gagandeep Singh | Cyber-Premium Portfolio",
  description: "Senior Frontend Architect and UI/UX Designer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${outfit.variable} font-outfit antialiased bg-[#050505] text-white selection:bg-[var(--accent)] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
