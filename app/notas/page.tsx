"use client";

import { useSearchParams } from "next/navigation";

const notas = [
  {
    slug: "cambio-interpretacion",
    tipo: "Frase",
    titulo:
      "El cambio empieza en la interpretación que hacemos de lo que vivimos",
    contenido: [
      "Muchas veces no podemos cambiar lo que pasa afuera, pero sí cómo lo interpretamos.",
      "Esa interpretación define nuestras decisiones y resultados.",
      "Cuando cambiás la mirada, cambian las posibilidades.",
    ],
  },
  {
    slug: "acompanar-emprendedor",
    tipo: "Nota",
    titulo: "Cómo acompañar a un emprendedor desde una mirada integral",
    contenido: [
      "Un emprendimiento no es solo estrategia.",
      "También es emocionalidad, historia y creencias.",
      "Cuando trabajás eso, el negocio cambia.",
    ],
  },
  {
    slug: "creencias-emociones-decisiones",
    tipo: "Artículo",
    titulo:
      "Creencias, emociones y decisiones en el crecimiento de un negocio",
    contenido: [
      "Las decisiones no son solo racionales.",
      "Están atravesadas por emociones y experiencias previas.",
      "Ordenar eso permite crecer con más claridad.",
    ],
  },
];

export default function NotasPage() {
  const searchParams = useSearchParams();
  const slugActual = searchParams.get("nota") || notas[0].slug;

  const notaActual =
    notas.find((n) => n.slug === slugActual) || notas[0];

  return (
    <main className="min-h-screen bg-[#F5F5F3] px-6 py-16 text-[#54656D]">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm font-medium text-[#95BF4A]">
          ← Volver al inicio
        </a>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          
          {/* MENU LATERAL */}
          <aside className="rounded-[2rem] border bg-white p-5">
            <p className="text-sm text-[#95BF4A] uppercase">
              Publicaciones
            </p>

            <div className="mt-6 space-y-3">
              {notas.map((nota) => (
                <a
                  key={nota.slug}
                  href={`/notas?nota=${nota.slug}`}
                  className={`block rounded-xl p-3 border ${
                    nota.slug === notaActual.slug
                      ? "bg-[#F2F8E8]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-xs text-[#95BF4A]">
                    {nota.tipo}
                  </span>
                  <p className="text-sm font-medium mt-1">
                    {nota.titulo}
                  </p>
                </a>
              ))}
            </div>
          </aside>

          {/* CONTENIDO */}
          <article className="rounded-[2rem] bg-white p-8">
            <p className="text-sm text-[#95BF4A] uppercase">
              {notaActual.tipo}
            </p>

            <h1 className="text-3xl font-semibold mt-3 text-[#6B97A8]">
              {notaActual.titulo}
            </h1>

            <div className="mt-6 space-y-4">
              {notaActual.contenido.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}