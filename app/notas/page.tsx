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

export default async function NotasPage({
  searchParams,
}: {
  searchParams: Promise<{ nota?: string }>;
}) {
  const params = await searchParams;
  const slugActual = params.nota || notas[0].slug;

  const notaActual = notas.find((nota) => nota.slug === slugActual) || notas[0];

  return (
    <main className="min-h-screen bg-[#F5F5F3] px-6 py-16 text-[#54656D]">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm font-medium text-[#95BF4A]">
          ← Volver al inicio
        </a>

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-[2rem] border border-[#D8DAD7] bg-white p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">
              Publicaciones
            </p>

            <div className="mt-6 space-y-3">
              {notas.map((nota) => (
                <a
                  key={nota.slug}
                  href={`/notas?nota=${nota.slug}`}
                  className={`block rounded-2xl border px-4 py-3 text-sm transition ${
                    nota.slug === notaActual.slug
                      ? "border-[#95BF4A] bg-[#F2F8E8] text-[#6B97A8]"
                      : "border-[#D8DAD7] text-[#66757C] hover:bg-[#F8F9F8]"
                  }`}
                >
                  <span className="block text-xs font-medium text-[#95BF4A]">
                    {nota.tipo}
                  </span>
                  <span className="mt-1 block font-medium">{nota.titulo}</span>
                </a>
              ))}
            </div>
          </aside>

          <article className="rounded-[2rem] border border-[#D8DAD7] bg-white p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">
              {notaActual.tipo}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#6B97A8]">
              {notaActual.titulo}
            </h1>

            <div className="mt-8 space-y-5">
              {notaActual.contenido.map((parrafo, index) => (
                <p key={index} className="text-lg leading-8 text-[#66757C]">
                  {parrafo}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}