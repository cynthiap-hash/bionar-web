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

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-[#D8DAD7] bg-white text-[#54656D]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo-bionar.jpg"
                alt="Bionar"
                className="h-12 w-auto object-contain"
              />
            </a>

            {/* NAV */}
            <nav className="hidden items-center gap-6 text-sm text-[#54656D] md:flex">
              <a href="/#inicio" className="transition hover:text-[#6B97A8]">Inicio</a>
              <a href="/#servicios" className="transition hover:text-[#6B97A8]">Servicios</a>
              <a href="/#cursos" className="transition hover:text-[#6B97A8]">Cursos</a>
              <a href="/#publicaciones" className="transition hover:text-[#6B97A8]">Publicaciones</a>
              <a href="/#contacto" className="transition hover:text-[#6B97A8]">Contacto</a>

              <a
                href="/#registro"
                className="rounded-full bg-[#95BF4A] px-4 py-2 font-medium text-white"
              >
                Inscribirme
              </a>
            </nav>

          </div>
        </header>

        {/* CONTENIDO DE CADA PÁGINA */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-[#D8DAD7] bg-[#F5F5F3] px-6 py-6 text-center text-sm text-[#7A878D]">
          © 2026 Bionar · Coaching - PNL - Biodescodificación
        </footer>

      </body>
    </html>
  );
}