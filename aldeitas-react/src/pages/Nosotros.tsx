import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Nosotros() {
  return (
    <main className="nosotros-page" style={{ paddingTop: '120px' }}>
      {/* HERO SECTION */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label"
            >
              Nuestra Historia
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-title"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.8rem)', marginBottom: '32px' }}
            >
              Una cocina con<br />propósito.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-sub"
            >
              Aldeitas Food nació en 2016 en Rosario con una premisa simple: cocinar para empresas
              con la misma dedicación y calidad que lo haríamos en casa. Hoy somos el socio
              estratégico de más de 35 compañías líderes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY GRID */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div className="page-split-grid" style={{ gap: '60px' }}>
            <AnimateOnScroll direction="left">
              <div style={{ position: 'relative', height: '700px', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (10).jpg`}
                  alt="Cocina Central Aldeitas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <span className="section-label" style={{ color: 'var(--gold)' }}>El Legado de Mercedes</span>
                <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Mercedes Cura, <br />Fundadora.</h2>
                <div style={{ width: '80px', height: '4px', background: 'var(--green)', margin: '24px 0 32px', borderRadius: '2px' }} />
                <p style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '32px' }}>
                  "Aldeitas nació para elevar el estándar de lo que un equipo come cada día.
                  Queremos que cada plato sea un momento de reconexión y energía."
                </p>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '48px' }}>
                  Mercedes transformó su pasión por la cocina saludable en un modelo operativo escalable,
                  sin perder nunca la esencia artesanal. Bajo su dirección, Aldeitas ha crecido
                  manteniendo un compromiso inquebrantable con la transparencia y la sanidad alimentaria.
                </p>

                <div className="page-2col-grid" style={{ gap: '32px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--green)', marginBottom: '12px' }}>Logística Propia</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Contamos con flota refrigerada para asegurar frescura total de punta a punta.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '12px' }}>Certificación</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Nuestra cocina cumple con los más altos estándares provinciales y municipales.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label">El corazón de Aldeitas</span>
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Más de 20 profesionales comprometidos con la excelencia gastronómica.</p>
          </div>

          <AnimateOnScroll>
            <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)', height: '600px' }}>
              <img
                src={`${import.meta.env.BASE_URL}assets/equipo_real.png`}
                alt="El equipo completo de Aldeitas Food"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* LOGOS / PARTNERS SECTION */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="section-title">Confían en nosotros</h2>
            <p className="section-sub">Líderes de industria que eligen calidad y puntualidad cada día.</p>
          </div>
          <div className="logos-grid" style={{ opacity: 0.8 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
              <div key={index} className="logo-item" style={{ minHeight: '100px', background: 'white' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/marcas/${index}.png`}
                  alt={`Cliente Aldeitas ${index}`}
                  style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
