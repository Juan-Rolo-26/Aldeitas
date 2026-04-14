import { motion } from 'framer-motion'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Congelados() {
  return (
    <main className="congelados-page" style={{ paddingTop: '120px' }}>
      {/* HERO SECTION */}
      <section className="hero-congelados" style={{ padding: '60px 0', marginBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label" style={{ color: 'var(--blue)', fontSize: '0.9rem' }}>Aldeitas en Casa</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5.5vw, 4rem)', marginBottom: '32px' }}>
                Comida real,<br /><em>lista en minutos.</em>
              </h1>
              <p className="section-sub" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                Nuestra línea de congelados premium está diseñada para quienes valoran la calidad nutritiva
                pero no tienen tiempo de cocinar. Sin conservantes, sin procesos industriales.
                Solo ingredientes naturales y mucho amor.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <ModalTrigger tipo="congelados" className="btn btn-blue">
                  Ver Catálogo de Productos
                </ModalTrigger>
                <ModalTrigger tipo="empresa" className="btn btn-outline-blue">
                  ¿Cómo comprar?
                </ModalTrigger>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', height: '550px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(24, 95, 165, 0.15)' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/congelados_hero.png`}
                alt="Productos Congelados Aldeitas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'var(--white)', padding: '12px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--blue)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                ❄️ Ultracongelado IQF
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--blue-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="section-title">El secreto de nuestra frescura</h2>
            <p className="section-sub">Utilizamos tecnología de ultracongelado que preserva la textura, sabor y nutrientes de cada ingrediente.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { icon: '🥦', title: '100% Natural', text: 'Cero conservantes, colorantes o aditivos. Comida honesta para toda la familia.' },
              { icon: '⚡', title: 'Práctico y Rápido', text: 'Del freezer al plato en menos de 10 minutos. Ideal para el ritmo actual.' },
              { icon: '♻️', title: 'Menos Desperdicio', text: 'Porciones justas que ayudan a reducir el descarte de alimentos en casa.' }
            ].map(({ icon, title, text }, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1}>
                <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '24px' }}>{icon}</div>
                  <h3 style={{ fontWeight: 800, marginBottom: '16px', color: 'var(--blue)', fontSize: '1.4rem' }}>{title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVER SECTION */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ background: 'var(--dark)', borderRadius: '40px', padding: '80px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.3 }}>
              <img
                src={`${import.meta.env.BASE_URL}assets/plato4.png`}
                alt="Gourmet detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
              <h2 className="section-title" style={{ color: 'var(--white)', fontSize: '2.8rem' }}>¿Tenés un negocio?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '40px' }}>
                También ofrecemos soluciones de distribución para buffets, comedores y tiendas de alimentos saludables.
              </p>
              <a href={`${import.meta.env.BASE_URL}distribucion`} className="btn btn-white">Explorar Distribución B2B</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
