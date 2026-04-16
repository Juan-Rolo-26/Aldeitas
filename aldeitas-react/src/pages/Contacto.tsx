import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || '5493413190087'

export default function Contacto() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me interesa saber más sobre los servicios de Aldeitas.')}`

  return (
    <main className="contacto-page">
      {/* IMPACT HERO SECTION - SPLIT SCREEN */}
      <section className="contacto-hero">
        <div className="contacto-hero-img">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (20).jpg`}
            alt="Nuestra Cocina"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.4))' }} />
        </div>

        <div className="contacto-hero-content">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="section-label" style={{ color: 'var(--green)' }}>Contacto</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '32px' }}>
              Hablemos.
            </h1>
            <p className="section-sub" style={{ fontSize: '1.3rem', marginBottom: '48px', color: 'var(--text-light)' }}>
              Contanos qué necesitás y <em>vemos juntos la mejor forma de resolverlo.</em>
            </p>

            <div style={{ background: 'var(--off-white)', padding: '30px', borderRadius: '30px', borderLeft: '5px solid var(--gold)' }}>
              <p style={{ fontWeight: 600, color: 'var(--dark)' }}>
                Propuestas a medida para empresas, comercios y distribuidores.
              </p>
            </div>

            <div style={{ marginTop: '48px' }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '20px 48px', fontSize: '1.1rem', width: '100%', justifyContent: 'center' }}>
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CHANNELS HUB */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Canales Oficiales</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* WhatsApp Card */}
            <AnimateOnScroll direction="up">
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '40px', textAlign: 'center' }} className="hover-lift">
                <div style={{ width: '80px', height: '80px', background: 'var(--green-light)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: 'var(--green)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>WhatsApp</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>Respuesta inmediata para consultas comerciales y pedidos.</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 800, textDecoration: 'none', fontSize: '1.1rem' }}>Chatear ahora →</a>
              </div>
            </AnimateOnScroll>

            {/* Email Card */}
            <AnimateOnScroll direction="up" delay={0.1}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '40px', textAlign: 'center' }} className="hover-lift">
                <div style={{ width: '80px', height: '80px', background: 'var(--blue-light)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: 'var(--blue)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>E-mail</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>Para propuestas formales, CVs o información general.</p>
                <a href="mailto:Aldeitasfood6@gmail.com" style={{ color: 'var(--blue)', fontWeight: 800, textDecoration: 'none', fontSize: '1.1rem' }}>Aldeitasfood6@gmail.com</a>
              </div>
            </AnimateOnScroll>

            {/* Location Card */}
            <AnimateOnScroll direction="up" delay={0.2}>
              <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '40px', textAlign: 'center' }} className="hover-lift">
                <div style={{ width: '80px', height: '80px', background: 'var(--gold-light)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: 'var(--gold)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Ubicación</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>Visitá nuestra cocina central en el corazón de Rosario.</p>
                <p style={{ color: 'var(--dark)', fontWeight: 700, fontSize: '1rem' }}>José M. Rosas 3115 bis, Rosario</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ORIENTATION BLOCK */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <div className="page-split-grid" style={{ alignItems: 'center', gap: '80px' }}>
            <AnimateOnScroll direction="left">
              <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (53).jpg`}
                  alt="Servicios Aldeitas"
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <span className="section-label">Guía de Soluciones</span>
                <h2 className="section-title" style={{ fontSize: '2.8rem' }}>¿Qué estás buscando hoy?</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
                  {[
                    { t: 'Resolver el almuerzo corporativo', d: 'Viandas frescas y equilibradas para tu equipo diario.' },
                    { t: 'Sumar congelados a tu negocio', d: 'Stockea tu local con productos de alta rotación.' },
                    { t: 'Ser distribuidor oficial', d: 'Llevá la calidad de Aldeitas a tu propia red.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 900 }}>✓</span>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{item.t}</h4>
                        <p style={{ color: 'var(--text-light)' }}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '50px', fontSize: '1.2rem', fontWeight: 700, color: 'var(--green)' }}>
                  Estamos para ayudarte a escalar.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* REFUERZO FINAL */}
      <section style={{ padding: '100px 0', background: 'var(--blue)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', fontSize: '3rem', marginBottom: '40px' }}>Respondemos rápido y sin compromiso.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
              Contactar por WhatsApp
            </a>
            <a href="mailto:Aldeitasfood6@gmail.com" className="btn btn-outline-white" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
              Enviar un E-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
