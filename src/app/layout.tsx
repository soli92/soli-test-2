import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith — Trova la tua pace interiore",
  description:
    "Zenith è la tua guida alla meditazione quotidiana. Sessioni guidate, suoni rilassanti e tracciamento dell'umore per un benessere mentale autentico.",
  keywords: ["meditazione", "mindfulness", "relax", "benessere", "stress"],
  openGraph: {
    title: "Zenith — Trova la tua pace interiore",
    description: "La tua guida alla meditazione quotidiana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
