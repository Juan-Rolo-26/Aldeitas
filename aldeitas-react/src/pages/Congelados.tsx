import { motion } from 'framer-motion'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const WA_NUMBER = import.meta.env.VITE_WA_NUMBER ?? '5491136365444'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me interesa solicitar el catálogo de productos congelados.')}`

export default function Congelados() {
  return (
    <main className="congelados-page" style={{ paddingTop: '120px' }}>
      {/* HERO SECTION */}
      <section className="hero-congelados" style={{ padding: '60px 0', marginBottom: '80px' }}>
        <div className="container">
          <div className="page-split-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label" style={{ color: 'var(--blue)', fontSize: '0.9rem' }}>Aldeitas</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5.5vw, 4rem)', marginBottom: '32px' }}>
                Comida casera,<br /><em>lista para resolver todos los días</em>
              </h1>
              <p className="section-sub" style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text)' }}>
                Productos congelados prácticos, abundantes y pensados para el consumo real.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--blue)', fontWeight: 600, marginBottom: '40px' }}>
                Cocinamos como si fuera para los nuestros.
              </p>
              <div className="page-hero-btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <ModalTrigger tipo="congelados" className="btn btn-blue">
                  Solicitar catálogo de productos
                </ModalTrigger>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline-blue">
                  Escribinos por WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', height: '550px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(24, 95, 165, 0.15)' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (11).jpg`}
                alt="Productos Congelados Aldeitas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'var(--white)', padding: '12px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--blue)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                ❄️ Calidad Congelada
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENFOQUE SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--blue-light)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-label" style={{ color: 'var(--blue)' }}>Nuestro Enfoque</span>
            <h2 className="section-title">Una solución simple para algo que pasa todos los días</h2>
            <p className="section-sub" style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '32px' }}>
              Cuando no hay tiempo para cocinar, cuando se busca algo práctico o cuando simplemente se quiere resolver una comida… <strong>Aldeitas está ahí.</strong>
            </p>
            <p className="section-sub">
              Desarrollamos productos congelados que combinan practicidad con calidad real.
            </p>
          </div>
        </div>
      </section>

      {/* PROPUESTA SECTION */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="page-split-grid" style={{ alignItems: 'center', gap: '80px' }}>
            <AnimateOnScroll>
              <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (3).jpg`}
                  alt="Comida Casera"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
            <div>
              <span className="section-label" style={{ color: 'var(--blue)' }}>Propuesta de Valor</span>
              <h2 className="section-title">Comida real, pensada para el día a día</h2>
              <p className="section-sub" style={{ marginBottom: '24px' }}>
                Cocinamos como si fuera para uno de los nuestros.
              </p>
              <p className="section-sub">
                Por eso nuestros productos se destacan por el sabor casero, el cuidado en la preparación y porciones que realmente satisfacen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span className="section-label" style={{ color: 'var(--blue)' }}>Nuestros Productos</span>
            <h2 className="section-title">Una línea pensada para distintos momentos</h2>
            <p className="section-sub">Productos que se adaptan a distintas formas de consumo.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* PLATOS PRINCIPALES */}
            <AnimateOnScroll>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '32px', height: '100%', border: '1px solid rgba(24, 95, 165, 0.08)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--blue)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                </div>
                <h3 style={{ color: 'var(--blue)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>VIANDAS / PLATOS</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '1rem' }}>Platos completos, abundantes y equilibrados.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Strogonoff de pollo y ternera</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Wok de pollo y ternera</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Milanesas y supremas</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Guisos y platos caseros</li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* EMPANADAS Y PIZZAS */}
            <AnimateOnScroll delay={0.1}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '32px', height: '100%', border: '1px solid rgba(24, 95, 165, 0.08)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--blue)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M12 21V7" /><path d="M12 7H4a2 2 0 0 0-2 2v10" /><path d="M12 7h8a2 2 0 0 1 2 2v10" /><path d="M20 21V7" /></svg>
                </div>
                <h3 style={{ color: 'var(--blue)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>EMPANADAS Y PIZZAS</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '1rem' }}>Clásicos que siempre funcionan.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Empanadas (carne, J&Q, verdura)</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Pizzas (Muzza, Napolitana, Fugazzeta)</li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* TARTAS Y SALADOS */}
            <AnimateOnScroll delay={0.2}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '32px', height: '100%', border: '1px solid rgba(24, 95, 165, 0.08)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--gold)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 3v18" /><path d="M3 12h18" /><path d="m18.36 5.64-12.72 12.72" /><path d="m18.36 18.36-12.72-12.72" /></svg>
                </div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>TARTAS Y SALADOS</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '1rem' }}>Opciones prácticas para el día a día.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Tartas (Verdura, Pollo, J&Q)</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Preparaciones listas para cocinar</li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* DULCES */}
            <AnimateOnScroll delay={0.3}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '32px', height: '100%', border: '1px solid rgba(24, 95, 165, 0.08)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--gold)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="m16 2 1 6" /><path d="m7 21 5-4 5 4" /></svg>
                </div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>DULCES</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '1rem' }}>Para acompañar o sumar algo más.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Budines artesanales</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Tortas del día</li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* GUARNICIONES */}
            <AnimateOnScroll delay={0.4}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '32px', height: '100%', border: '1px solid rgba(24, 95, 165, 0.08)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--blue)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10h8" /><path d="M10 14h4" /><path d="M12 18V6" /><path d="M3 10a9 9 0 0 1 18 0" /><path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /></svg>
                </div>
                <h3 style={{ color: 'var(--blue)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>GUARNICIONES</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '1rem' }}>Para completar la experiencia.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Purés y Vegetales</li>
                  <li style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600 }}>• Salsas listas</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FORMAS DE CONSUMO SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--blue)', color: 'var(--white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Productos pensados para distintas formas de uso</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.8)' }}>Distintas opciones para adaptarse a cada momento y necesidad.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
            {['Para cocinar', 'Para calentar', 'Para regenerar'].map((item, idx) => (
              <AnimateOnScroll key={item} delay={idx * 0.1}>
                <div style={{ textAlign: 'center', width: '200px' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    marginBottom: '24px',
                    margin: '0 auto 24px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}>
                    <div style={{ color: 'var(--white)' }}>
                      {idx === 0 ? (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6l.32-.23a1.5 1.5 0 0 0 .5-1.54l-.44-1.1s.14-.13.34-.13a1.5 1.5 0 0 1 1 .43l2 2a1.5 1.5 0 0 1 0 2.12" /><path d="m15.5 10.5 4.5 4.5a2 2 0 0 1 0 2.83l-1.67 1.67a2 2 0 0 1-2.83 0l-4.5-4.5" /><path d="m14 7.5 2.29 2.29" /><path d="M3.8 19.33a.5.5 0 0 0 .1.11.5.5 0 0 0 .7-.08l2.21-2.48a1 1 0 0 1 1.4-.04c.12.1.25.21.37.33l1.1 1.1a1 1 0 0 1 .1 1.48L7.6 22.3a.5.5 0 0 1-.7.1.5.5 0 0 1-.1-.13l-3.3-3.3a.5.5 0 0 1 .3-.64Z" /></svg>
                      ) : idx === 1 ? (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="15" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M7 7h.01" /><path d="M11 7h.01" /><path d="M15 7h.01" /><circle cx="12" cy="14" r="2" /></svg>
                      ) : (
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 0 1-9-9c0-5 3-9 9-9 4 0 7 2 8.4 5" /><path d="M16 3l1 1-1 1" /><path d="M22 12a10 10 0 0 1-10 10" /><path d="M7 12a5 5 0 0 1 5-5" /></svg>
                      )}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{item}</h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIALES SECTION */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span className="section-label" style={{ color: 'var(--blue)' }}>Por qué elegirnos</span>
            <h2 className="section-title">Qué hace diferente a Aldeitas</h2>
          </div>

          <div className="page-3col-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {[
              { title: 'Sabor casero real', desc: 'Como si lo buscaras en la cocina de tu casa.', icon: 'La Aldea - Alta (3).jpg' },
              { title: 'Porciones abundantes', desc: 'Un diferencial concreto frente a otras opciones.', icon: 'La Aldea - Alta (18).jpg' },
              { title: 'Calidad constante', desc: 'Mismo estándar en cada producto.', icon: 'La Aldea - Alta (36).jpg' },
              { title: 'Practicidad', desc: 'Productos pensados para resolver, sin complicaciones.', icon: 'La Aldea - Alta (34).jpg' }
            ].map((d, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 24px', boxShadow: 'var(--shadow)' }}>
                    <img src={`${import.meta.env.BASE_URL}assets/${d.icon}`} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--blue)', marginBottom: '16px' }}>{d.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BARRERAS SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--blue-light)' }}>
        <div className="container">
          <div className="page-split-grid" style={{ alignItems: 'center', gap: '80px' }}>
            <div>
              <h2 className="section-title">Sabemos lo que se busca en este tipo de productos</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
                {['Que sean ricos', 'Que sean prácticos', 'Que realmente rindan', 'Que valgan la pena'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, color: 'var(--blue)', fontSize: '1.1rem' }}>
                    <span style={{
                      background: 'var(--blue)',
                      color: 'white',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="section-sub" style={{ fontSize: '1.15rem' }}>
                Por eso trabajamos con recetas simples, procesos cuidados y foco en el consumo real.
              </p>
            </div>
            <AnimateOnScroll>
              <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (20).jpg`}
                  alt="Calidad Aldeitas"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ marginBottom: '16px', maxWidth: '800px', margin: '0 auto 40px' }}>Si querés conocer toda la línea de productos, escribinos</h2>
            <ModalTrigger tipo="congelados" className="btn btn-blue">
              Solicitar catálogo de productos
            </ModalTrigger>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CRUCE ESTRATÉGICO */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'var(--dark)',
            borderRadius: '40px',
            padding: '80px',
            textAlign: 'center',
            color: 'var(--white)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>¿Querés vender estos productos en tu negocio?</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '44px', maxWidth: '700px', margin: '0 auto 44px' }}>Llevá la calidad de Aldeitas a tus clientes y potencia tus ventas.</p>
              <a href={`${import.meta.env.BASE_URL}distribucion`} className="btn btn-white">
                Conocé cómo distribuir Aldeitas
              </a>
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '40%',
              height: '100%',
              background: 'linear-gradient(to left, rgba(24, 95, 165, 0.15), transparent)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </section>
    </main>
  )
}
