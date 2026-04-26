"use client";

import { useState } from "react";

export default function BionarWebMaqueta() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    interes: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState("");
  const [cargando, setCargando] = useState(false);

  const servicios = [
    {
      titulo: "Biodescodificación",
      descripcion:
        "Patrones que influyen en tu negocio - Trabajamos sobre los patrones y respuestas que influyen en tus decisiones actuales, para poder abordarlos desde su origen.",
      imagen:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    },
    {
      titulo: "Coaching",
      descripcion:
        "Claridad en tus decisiones - Ordenamos lo que hoy está confuso para que puedas decidir con mayor foco.",
      imagen:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      titulo: "PNL",
      descripcion:
        "Pensar, comunicar y decidir mejor - Mejoramos tu enfoque, tu comunicación y tu forma de accionar en el negocio.",
      imagen:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      titulo: "Asesoramiento empresarial",
      descripcion:
        "Bajamos todo a tierra - Establecemos un orden estratégico, una mejora de procesos y definimos acciones concretas alineadas a tus objetivos.",
      imagen:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const cursos = [
    {
      nombre: "Introducción a la Biodescodificación",
      modalidad: "Presencial / Online",
      resumen:
        "Una experiencia inicial para comprender fundamentos, casos prácticos y aplicaciones al ámbito personal.",
      imagen:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      nombre: "Emprender con propósito",
      modalidad: "Workshop intensivo",
      resumen:
        "Entrenamiento para alinear visión, propósito, emocionalidad y estrategia de negocio.",
      imagen:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      nombre: "PNL aplicada a ventas y comunicación",
      modalidad: "Seminario",
      resumen:
        "Recursos concretos para escuchar mejor, comunicar con impacto y vender desde la autenticidad.",
      imagen:
        "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const publicaciones = [
    {
      titulo:
        "El nuevo liderazgo: transformar el ser para transformar los resultados.",
      tipo: "Frase",
      slug: "cambio-interpretacion",
      preview: "El liderazgo actual nace del autoconocimiento, la coherencia y la resiliencia, más allá de solo resultados. Liderar desde el ser genera confianza, cultura sólida y relaciones auténticas.",
      imagen:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      titulo: "El éxito no es lo que haces, sino quién eres mientras lo haces.",
      tipo: "Nota",
      slug: "acompanar-emprendedor",
      preview: "El verdadero éxito no depende de lo que haces, sino de quién eres al hacerlo. La identidad y la coherencia son la base para decisiones firmes y vínculos de confianza.",
      imagen:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      titulo:
        "Reprograma tu mente para el éxito: Más allá de las creencias limitantes",
      tipo: "Artículo",
      slug: "creencias-emociones-decisiones",
      Preview: "Las creencias limitantes frenan tu crecimiento, pero puedes reprogramarlas con PNL. Cambiar tu lenguaje interno y emocional transforma tus resultados y tu liderazgo.",
      imagen:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const testimonios = [
    {
      nombre: "Mariana G.",
      texto:
        "El acompañamiento me ayudó a ordenar mi emprendimiento y, al mismo tiempo, a trabajar aspectos personales que me frenaban.",
    },
    {
      nombre: "Lucía R.",
      texto:
        "Los cursos están muy bien guiados, con cercanía, profundidad y herramientas concretas para aplicar en el día a día.",
    },
    {
      nombre: "Carolina P.",
      texto:
        "Sentí un espacio profesional, humano y transformador. Me dio claridad para avanzar con más seguridad.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("");

    if (!formData.nombre || !formData.email || !formData.interes || !formData.mensaje) {
      setEstado("Por favor completa todos los campos.");
      return;
    }

    setCargando(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setEstado("Mensaje enviado correctamente.");
        setFormData({
          nombre: "",
          email: "",
          interes: "",
          mensaje: "",
        });
      } else {
        setEstado(data.error || "Hubo un error al enviar.");
      }
    } catch (error) {
      setEstado("No se pudo enviar el formulario.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#54656D]">
      <header className="sticky top-0 z-50 border-b border-[#D8DAD7] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-bionar.png"
              alt="Bionar"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#inicio" className="transition hover:text-[#6B97A8]">Inicio</a>
            <a href="#servicios" className="transition hover:text-[#6B97A8]">Servicios</a>
            <a href="#cursos" className="transition hover:text-[#6B97A8]">Cursos</a>
            <a href="#publicaciones" className="transition hover:text-[#6B97A8]">Publicaciones</a>
            <a href="#contacto" className="transition hover:text-[#6B97A8]">Contacto</a>
            <a href="#registro" className="rounded-full bg-[#95BF4A] px-4 py-2 font-medium text-white">Inscribirme</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(149,191,74,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(107,151,168,0.16),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:pt-15 md:pb-32">
          <div>
            <span className="inline-flex rounded-full border border-[#CFE0B5] bg-[#F2F8E8] px-4 py-1 text-sm text-[#7FA642]">
              Coaching · Biodescodificación · PNL · Emprendedores
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#6B97A8] md:text-6xl">
              Liderar desde adentro para crecer hacia afuera
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#66757C]">
              En Bionar acompañamos a emprendedores y líderes que, a pesar de estar en movimiento, no logran resultados sostenidos. Trabajamos sobre cómo pensás, decidís y actuás para que tu negocio avance con mayor claridad y dirección.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#registro" className="rounded-2xl bg-[#95BF4A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]">
                Agendá una entrevista
              </a>
              <a href="#servicios" className="rounded-2xl border border-[#6B97A8] px-6 py-3 text-sm font-medium text-[#6B97A8] transition hover:bg-[#EEF5F7]">
                Nuestros enfoques
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-2xl border border-[#D8DAD7] bg-[#FAFAF9] p-4">
                <p className="text-2xl font-semibold text-[#6B97A8]">Claridad</p>
                <p className="mt-1 text-sm text-[#66757C]">Entender que está influyendo en tu negocio. Aprende a liderar tus emociones.</p>
              </div>
              <div className="rounded-2xl border border-[#D8DAD7] bg-[#FAFAF9] p-4">
                <p className="text-2xl font-semibold text-[#6B97A8]">Dirección</p>
                <p className="mt-1 text-sm text-[#66757C]">Enfoque estratégico para guiar las decisiones de tu proyecto. Saber qué hacer y en qué orden</p>
              </div>
              <div className="rounded-2xl border border-[#D8DAD7] bg-[#FAFAF9] p-4">
                <p className="text-2xl font-semibold text-[#6B97A8]">Acción</p>
                <p className="mt-1 text-sm text-[#66757C]">Diseñar un plan alineado con tu propósito. Definir pasos claros para ejecutarlo.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2 overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
                alt="Sesión de acompañamiento"
                className="h-[360px] w-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] border border-[#D8DAD7] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-[#95BF4A]">Próximo programa</p>
              <h3 className="mt-2 text-xl font-semibold text-[#6B97A8]">Emprender con propósito</h3>
              <p className="mt-3 text-sm leading-7 text-[#66757C]">
                Un espacio para ordenar tu visión, fortalecer tu comunicación y dar pasos concretos en tu negocio.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#D8DAD7] bg-[#6B97A8] p-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-[#DCE8ED]">Modalidad</p>
              <h3 className="mt-2 text-xl font-semibold">Online y presencial</h3>
              <p className="mt-3 text-sm leading-7 text-[#EDF5F7]">
                Encuentros online y presenciales, con seguimiento personalizado y herramientas aplicables desde el inicio.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap- rounded-[2rem] border border-[#D8DAD7] bg-white p-6 md:grid-cols-3 relative z-10 mx-auto -mt-20 max-w-7xl px-6 pb-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Propuesta</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8]">Bionar: una forma distinta de trabajar en tu negocio</h2>
          </div>
          <p className="leading-7 text-[#66757C]">
            Emprender no tiene porqué ser un proceso lento ni agotador. En Bionar, usamos el juego y el movimiento como herramientas para ayudarte a tomar decisiones con más claridad, salir de tu zona de confort y avanzar con foco.
          </p>
          <p className="leading-7 text-[#66757C]">
            Si sentís que tu proyecto tiene que estar alineado con lo que sos y lo que querés, este espacio es para vos. Trabajamos sobre creencias, hábitos y forma de pensar, porque el crecimiento del negocio empieza por el crecimiento personal. 
          </p>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Dimensiones del proceso</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8] md:text-4xl">Cómo trabajamos en Bionar</h2>
          <p className="mt-4 text-lg text-[#66757C]">
            El diferencial de nuestro proceso es que no trabajamos el negocio como algo externo, sino como una extensión de quien lo lidera. A través de las siguientes herramientas, abordamos cómo pensás, decidís y actuás, para generar resultados reales en tu emprendimiento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio) => (
            <article
              key={servicio.titulo}
              className="overflow-hidden rounded-[1.75rem] border border-[#D8DAD7] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
            >
              <img src={servicio.imagen} alt={servicio.titulo} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#6B97A8]">{servicio.titulo}</h3>
                <p className="mt-3 leading-7 text-[#66757C]">{servicio.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-[#D8DAD7] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=80"
              alt="Encuentro grupal"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-[#6B97A8] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#DCE8ED]">Experiencia</p>
            <h2 className="mt-3 text-3xl font-semibold">Lo que empieza a cambiar cuando empezás a Bionar</h2>
            <p className="mt-4 text-lg leading-8 text-[#EDF5F7]">
              Al dominar estas herramientas, comenzás a descubrír los patrones invisibles y las memorias biológicas que hoy actúan como el techo de cristal de tus proyectos. Solo cuando el líder decodifica sus propios bloqueos, el negocio recupera su flujo natural.
            </p>
            <ul className="mt-4 space-y-2 text-[#EDF5F7]">
              <li>Bionar es un proceso donde:</li>
              <li>• Entendes: qué está condicionando tus decisiones hoy</li>
              <li>• Definis: prioridades claras y sostenibles</li>
              <li>• Mejoras: tu forma de comunicar y decidir</li>
              <li>• Avanzas: de la idea a la acción con mayor dirección</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Portfolio de cursos</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8] md:text-4xl">Formaciones realizadas y próximas ediciones</h2>
            </div>
            <p className="max-w-xl text-[#66757C]">
              Esta sección puede mostrar cursos dados, programas activos, cupos, testimonios o próximas fechas de inscripción.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cursos.map((curso) => (
              <article
                key={curso.nombre}
                className="overflow-hidden rounded-[1.75rem] border border-[#D8DAD7] bg-[#F8F9F8]"
              >
                <img src={curso.imagen} alt={curso.nombre} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#EDF4F6] px-3 py-1 text-xs font-medium text-[#6B97A8]">
                    {curso.modalidad}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#6B97A8]">{curso.nombre}</h3>
                  <p className="mt-3 leading-7 text-[#66757C]">{curso.resumen}</p>
                  <button className="mt-6 rounded-2xl border border-[#95BF4A] px-4 py-2 text-sm font-medium text-[#7FA642] transition hover:bg-[#F0F7E6]">
                    Ver detalle
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publicaciones" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Publicaciones</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8] md:text-4xl">Frases, notas y contenidos de valor</h2>
          <p className="mt-4 text-lg text-[#66757C]">
            Ideas para entender cómo lo que pensás y sentís impacta en tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {publicaciones.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-[1.75rem] border border-[#D8DAD7] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <img src={item.imagen} alt={item.titulo} className="h-52 w-full object-cover" />
              <div className="p-6">
                <span className="text-sm font-medium text-[#95BF4A]">{item.tipo}</span>
                <h3 className="mt-3 text-xl font-semibold leading-8 text-[#6B97A8]">{item.titulo}</h3>
                <p className="mt-4 leading-7 text-[#66757C]">
                  Una vista previa breve para invitar a seguir leyendo y reforzar tu posicionamiento como referente.
                </p>
                <a href={`/notas?nota=${item.slug}`} className="mt-6 inline-block text-sm font-medium text-[#6B97A8]">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Testimonios</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8] md:text-4xl">Lo que dicen quienes ya vivieron la experiencia</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonios.map((testimonio) => (
              <article
                key={testimonio.nombre}
                className="rounded-[1.75rem] border border-[#D8DAD7] bg-[#F8F9F8] p-6"
              >
                <div className="mb-5 text-3xl text-[#95BF4A]">“</div>
                <p className="leading-8 text-[#66757C]">{testimonio.texto}</p>
                <p className="mt-6 font-medium text-[#6B97A8]">{testimonio.nombre}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="registro" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2rem] bg-[#EEF5F7] p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#95BF4A]">Inscripciones</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#6B97A8] md:text-4xl">
              Déjanos tus datos y te enviamos próximas fechas
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#66757C]">
              Puedes usar este bloque para captar consultas e inscripciones a cursos, talleres, sesiones o mentorías.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="space-y-4">
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="w-full rounded-2xl border border-[#D9DFE2] px-4 py-3 outline-none transition focus:border-[#6B97A8]"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-[#D9DFE2] px-4 py-3 outline-none transition focus:border-[#6B97A8]"
              />
              <select
                name="interes"
                value={formData.interes}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#D9DFE2] px-4 py-3 text-[#66757C] outline-none transition focus:border-[#6B97A8]"
              >
                <option value="">Me interesa...</option>
                <option>Curso de Biodescodificación</option>
                <option>Programa de Coaching</option>
                <option>PNL para emprendedores</option>
                <option>Asesoramiento empresarial</option>
              </select>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame qué te gustaría trabajar"
                rows={4}
                className="w-full rounded-2xl border border-[#D9DFE2] px-4 py-3 outline-none transition focus:border-[#6B97A8]"
              />
              <button
                type="submit"
                disabled={cargando}
                className="w-full rounded-2xl bg-[#95BF4A] px-4 py-3 font-medium text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {cargando ? "Enviando..." : "Quiero recibir información"}
              </button>

              {estado && (
                <p className={`text-sm ${estado.includes("correctamente") ? "text-green-600" : "text-red-600"}`}>
                  {estado}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <section id="contacto" className="bg-[#6B97A8] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#DDE8EC]">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A veces el problema no es el esfuerzo, sino desde dónde estás decidiendo</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#EEF5F7]">
              Si venís haciendo mucho pero sin resultados claros, es momento de revisar el enfoque.
            </p>
            <div className="mt-8 space-y-3 text-[#EEF5F7]">
              <p>Email: bionar.contacto@gmail.com</p>
              <p>WhatsApp: +54 9 3764642247</p>
              <p>Instagram: @bionar_coaching</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80"
              alt="Reunión de trabajo"
              className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D8DAD7] bg-[#F5F5F3] px-6 py-6 text-center text-sm text-[#7A878D]">
        © 2026 Bionar · Coaching & Biodescodificación
      </footer>
    </div>
  );
}