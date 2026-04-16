import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Viandas Corporativas Aldeitas Food',
  serviceType: 'Viandas corporativas para empresas',
  provider: { '@type': 'Organization', name: 'Aldeitas Food', url: 'https://aldeitasfood.com.ar/' },
  areaServed: { '@type': 'City', name: 'Rosario, Santa Fe, Argentina' },
  description: 'Servicio de viandas corporativas para empresas. Calidad real, entregas puntuales y sistema sin fricción.',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
}

export default function Viandas() {
  return (
    <main className="viandas-page" style={{ paddingTop: '120px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />

      {/* SECCIÓN 1 — HERO */}
      <section className="hero-viandas" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
        <div className="container">
          <div className="page-split-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Servicio Corporativo</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', marginBottom: '24px' }}>
                El almuerzo de tu empresa, <em>resuelto todos los días.</em>
              </h1>
              <p className="section-sub" style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text)' }}>
                Viandas corporativas con calidad real, entregas puntuales y un sistema pensado para que todo funcione sin fricción.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-light)', fontStyle: 'italic', borderLeft: '3px solid var(--gold)', paddingLeft: '20px' }}>
                Porque cuando el almuerzo está bien resuelto, todo el día funciona mejor.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <ModalTrigger tipo="empresa" className="btn btn-primary" style={{ width: 'fit-content', padding: '18px 48px', fontSize: '1.1rem' }}>
                  Solicitar cotización
                </ModalTrigger>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '12px' }}>
                  Escribinos por WhatsApp y coordinamos una reunión
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', height: '600px', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (18).jpg`}
                alt="Viandas Corporativas Aldeitas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 & 3 — EL PROBLEMA Y LA SOLUCIÓN */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <AnimateOnScroll direction="left">
              <div>
                <span className="section-label">El Problema</span>
                <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Cuando el equipo crece, el almuerzo se vuelve un problema</h2>
                <div style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '20px' }}>Lo que antes se resolvía fácil, deja de funcionar cuando hay 20, 30 o más personas todos los días.</p>
                  <p style={{ marginBottom: '20px' }}>Pedidos que no llegan, comida que no alcanza o proveedores que fallan…</p>
                  <p style={{ fontWeight: 600, color: 'var(--dark)' }}>Y lo que debería ser un momento simple, se convierte en un problema operativo diario.</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div style={{ background: 'var(--green)', color: 'var(--white)', padding: '60px', borderRadius: '40px', boxShadow: 'var(--shadow-hover)' }}>
                <span className="section-label" style={{ color: 'var(--gold)' }}>La Solución</span>
                <h2 className="section-title" style={{ color: 'var(--white)', fontSize: '2.5rem' }}>Una solución simple para algo que pasa todos los días</h2>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '20px' }}>En Aldeitas Food nos dedicamos a resolver el almuerzo de equipos de trabajo.</p>
                  <p>Con un sistema flexible, opciones variadas y un servicio pensado para adaptarse a cada empresa.</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — CÓMO FUNCIONA */}
      <section id="como-funciona" style={{ padding: '120px 0', background: 'var(--green)', color: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Metodología</span>
            <h2 className="section-title" style={{ color: 'white' }}>Un servicio pensado para que funcione sin fricción</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px' }}
          >
            {[
              { num: '1', title: 'Definimos la necesidad', text: 'Analizamos la cantidad de personas, dinámicas y preferencias.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01" /><path d="M7 20h.01" /><path d="M17 20h.01" /><path d="M12 4v4" /><path d="M12 12v4" /><path d="M8 8V4h8v4" /></svg> },
              { num: '2', title: 'Diseñamos la propuesta', text: 'Armamos un servicio a medida para tu empresa.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01" /><path d="M2 20h20" /><path d="M12 4v16" /><path d="M7 9h10" /></svg> },
              { num: '3', title: 'Elección flexible', text: 'Elección desde nuestra App para cada empleado.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg> },
              { num: '4', title: 'Producción diaria', text: 'Cocinamos todos los días con procesos cuidados.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6l.32-.23a1.5 1.5 0 0 0 .5-1.54l-.44-1.1s.14-.13.34-.13a1.5 1.5 0 0 1 1 .43l2 2a1.5 1.5 0 0 1 0 2.12" /><path d="m15.5 10.5 4.5 4.5a2 2 0 0 1 0 2.83l-1.67 1.67a2 2 0 0 1-2.83 0l-4.5-4.5" /></svg> },
              { num: '5', title: 'Entrega puntual', text: 'Llegamos en tiempo y forma, todos los días.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="2" y="6" rx="2" /><path d="M16 9h4l3 3v5h-1" /><circle cx="6.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                style={{ position: 'relative', padding: '40px 20px', textAlign: 'center' }}
              >
                <div style={{
                  width: '64px', height: '64px', background: 'var(--green-light)', color: 'var(--green)',
                  borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px', position: 'relative', zIndex: 2, boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px', color: 'var(--gold)' }}>{step.title}</h3>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 5 — DIFERENCIALES */}
      <section style={{ padding: '120px 0', background: 'var(--green)', color: 'var(--white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Nuestros Fuertes</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Por qué las empresas nos eligen</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Calidad real', text: 'Comida casera, bien hecha y con materia prima seleccionada.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> },
              { title: 'Porciones abundantes', text: 'Una diferencia concreta frente a otras opciones del mercado.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" /></svg> },
              { title: 'Cumplimiento', text: 'Sabemos que esto es parte de tu operación diaria.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
              { title: 'Adaptabilidad', text: 'Nos ajustamos con opciones para distintos perfiles.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-4-4 4-4" /><path d="M17 12H3" /><path d="m3 8 4 4-4 4" /></svg> }
            ].map((item, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '48px 40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', height: '100%' }} className="hover-lift">
                  <div style={{ color: 'var(--gold)', marginBottom: '24px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontWeight: 800, marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '1.05rem' }}>{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — FLEXIBILIDAD */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <AnimateOnScroll direction="left">
              <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', height: '500px' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (34).jpg`}
                  alt="Flexibilidad del servicio"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <span className="section-label">Adaptabilidad Total</span>
                <h2 className="section-title">Un servicio que se adapta a tu empresa</h2>
                <p className="section-sub" style={{ marginBottom: '32px' }}>Podés implementar el servicio de distintas formas:</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Viandas individuales con elección por app',
                    'Menú definido por la empresa',
                    'Opciones especiales (veganos, celíacos, etc.)',
                    'Entrega diaria',
                    'Posibilidad de montar comedor en planta'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 500 }}>
                      <span style={{ width: '28px', height: '28px', background: 'var(--green)', color: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — BARRERAS */}
      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center">
            <span className="section-label">Transparencia</span>
            <h2 className="section-title">Sabemos lo que estás evaluando</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '40px 0' }}>
              {['La relación precio-calidad', 'El cumplimiento del servicio', 'La calidad de la comida'].map((item, idx) => (
                <div key={idx} style={{ fontWeight: 700, color: 'var(--green)' }}>● {item}</div>
              ))}
            </div>
            <p className="section-sub" style={{ fontSize: '1.2rem' }}>
              Por eso trabajamos con un sistema claro, procesos definidos y foco en que esto funcione todos los días.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — CIERRE */}
      <section style={{ padding: '140px 0', textAlign: 'center' }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="section-title" style={{ fontSize: '3.5rem' }}>¿Hablamos?</h2>
              <p className="section-sub" style={{ marginBottom: '48px' }}>
                Si en tu empresa el almuerzo del equipo es un problema, podemos ayudarte a resolverlo.
              </p>
              <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <ModalTrigger tipo="empresa" className="btn btn-primary" style={{ padding: '20px 60px', fontSize: '1.2rem' }}>
                  Solicitar cotización
                </ModalTrigger>
                <p style={{ color: 'var(--text-light)', fontWeight: 500 }}>
                  Escribinos por WhatsApp y contanos cuántas personas almuerzan en tu empresa.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
