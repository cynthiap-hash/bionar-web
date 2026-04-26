import Header from "./components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bionar",
  description: "Coaching · PNL · Biodescodificación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F5F3] text-[#54656D]`}
      >
        
        {/* HEADER (ahora es componente) */}
        <Header />

        {/* CONTENIDO */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-[#D8DAD7] bg-[#F5F5F3] px-6 py-6 text-center text-sm text-[#7A878D]">
          © 2026 Bionar · Coaching - PNL - Biodescodificación
        </footer>

      </body>
    </html>
  );
}