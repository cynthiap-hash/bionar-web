"use client";

import { useState } from "react";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8DAD7] bg-white text-[#54656D]">
      
      {/* CONTENEDOR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-bionar.jpg"
            alt="Bionar"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* BOTÓN MOBILE */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <a href="/#inicio" className="hover:text-[#6B97A8]">Inicio</a>
          <a href="/#servicios" className="hover:text-[#6B97A8]">Servicios</a>
          <a href="/#cursos" className="hover:text-[#6B97A8]">Cursos</a>
          <a href="/#publicaciones" className="hover:text-[#6B97A8]">Publicaciones</a>
          <a href="/#contacto" className="hover:text-[#6B97A8]">Contacto</a>
          
          <a
            href="/#registro"
            className="rounded-full bg-[#95BF4A] px-4 py-2 text-white"
          >
            Solicitar información
          </a>
        </nav>
      </div>

      {/* MENÚ MOBILE PRO */}
      {menuAbierto && (
        <div className="lg:hidden border-t border-[#D8DAD7] bg-white px-6 py-5 text-sm shadow-sm">
          <nav className="flex flex-col gap-1 text-[#54656D]">

            <a
              href="/#inicio"
              className="rounded-xl px-4 py-3 transition hover:bg-[#F2F8E8] hover:text-[#6B97A8]"
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="rounded-xl px-4 py-3 transition hover:bg-[#F2F8E8] hover:text-[#6B97A8]"
              onClick={() => setMenuAbierto(false)}
            >
              Servicios
            </a>

            <a
              href="/#cursos"
              className="rounded-xl px-4 py-3 transition hover:bg-[#F2F8E8] hover:text-[#6B97A8]"
              onClick={() => setMenuAbierto(false)}
            >
              Cursos
            </a>

            <a
              href="/#publicaciones"
              className="rounded-xl px-4 py-3 transition hover:bg-[#F2F8E8] hover:text-[#6B97A8]"
              onClick={() => setMenuAbierto(false)}
            >
              Publicaciones
            </a>

            <a
              href="/#contacto"
              className="rounded-xl px-4 py-3 transition hover:bg-[#F2F8E8] hover:text-[#6B97A8]"
              onClick={() => setMenuAbierto(false)}
            >
              Contacto
            </a>

            <a
              href="/#registro"
              className="mt-3 rounded-full bg-[#95BF4A] px-4 py-3 text-center font-medium text-white transition hover:opacity-90"
              onClick={() => setMenuAbierto(false)}
            >
              Solicitar información
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}