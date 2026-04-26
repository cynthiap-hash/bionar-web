const notas = [
  {
    slug: "cambio-interpretacion",
    tipo: "Frase",
    titulo:
      "El nuevo liderazgo: transformar el ser para transformar los resultados.",
    contenido: [
    "En el mundo actual, liderar ya no significa solo dirigir equipos o alcanzar metas financieras. El verdadero liderazgo nace del ser interior: de la identidad, los valores y la coherencia que cada persona lleva a sus decisiones y relaciones.",
    "Un líder que se conoce a sí mismo no necesita máscaras ni discursos vacíos. Su autenticidad inspira confianza, fortalece la cultura organizacional y crea vínculos genuinos con clientes y colaboradores. Como dice el libro Transformando el Ser: “La identidad personal surge como el ancla que nos mantiene firmes cuando las corrientes externas amenazan con desplazarnos”.",
    "Este nuevo liderazgo se construye sobre tres pilares esenciales:",
    "• Autoconocimiento: la brújula que guía decisiones conscientes y coherentes.",
    "• Lenguaje y emociones: herramientas para comunicar con claridad y generar confianza.",
    "• Resiliencia: la capacidad de transformar las crisis en aprendizaje y crecimiento.",
    "Cuando un líder conecta su propósito con cada acción, no solo logra resultados sostenibles, sino que también transforma a las personas que hacen posible esos resultados. El liderazgo desde el ser es, en esencia, un camino de integridad, propósito y humanidad compartida.",
    "¿Qué opinas? ¿Crees que el liderazgo auténtico es la clave para el futuro de los negocios?",
  ],
},
  {
    slug: "acompanar-emprendedor",
    tipo: "Nota",
    titulo: "El éxito no es lo que haces, sino quién eres mientras lo haces.",
    contenido: [
      "Es de suma importancia introducir la identidad personal y el autoconocimiento como base del liderazgo.",
      "Muchos emprendedores buscan la \"fórmula mágica\" en estrategias externas, olvidando que el cimiento de cualquier proyecto sostenible es la identidad de quien lo lidera. La identidad no es una máscara para impresionar a clientes; es la esencia que dicta cómo piensas, hablas y actúas ante los desafíos.",
      "El autoconocimiento como brújula: Conocer tus valores y motivaciones no es un lujo, es una herramienta operativa que te permite tomar decisiones coherentes y construir relaciones auténticas con tu equipo y aliados.",
      "La coherencia como estrategia: Cuando hay alineación entre lo que dices y lo que haces, generas una confianza que el mercado percibe de inmediato.",
      "Pregunta clave: ¿Qué valores quieres defender incluso cuando el negocio exija sacrificios?.",
      "Si sientes que tu negocio ha crecido pero has perdido el rumbo, únete a nuestro programa de liderazgo consciente para redescubrir la brújula que guiará tu próximo nivel de éxito.",
    ],
  },
  {
    slug: "creencias-emociones-decisiones",
    tipo: "Artículo",
    titulo:
      "Reprograma tu mente para el éxito: Más allá de las creencias limitantes",
    contenido: [
      "Mostrar cómo la Programación Neurolingüística (PNL) puede transformar la gestión empresarial",
      "¿Alguna vez has sentido que hay un techo invisible que no te deja avanzar? Ese techo suelen ser las creencias limitantes: frases como \"no soy suficientemente capaz\" o \"siempre fallaré en esto\" que actúan como software defectuoso en tu mente",
      "El poder del lenguaje: Las palabras que eliges no solo describen tu realidad, la crean. Cambiar un discurso interno de amenazas por uno de posibilidades transforma tus acciones proactivas.",
      "Herramientas prácticas: Mediante técnicas como el reencuadre, puedes convertir un error en información valiosa que acelere tu aprendizaje, en lugar de verlo como una señal de incapacidad.",
      "Aprende a gestionar esos estados  de ansiedad a la calma, segundos antes de una negociación importante utilizando técnicas de anclaje.",
      "Deja de ser rehén de tus viejos patrones mentales. Inscríbete en nuestro entrenamiento y adquiere la \"caja de herramientas\" de PNL que todo líder moderno necesita para reprogramar sus resultados.",
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