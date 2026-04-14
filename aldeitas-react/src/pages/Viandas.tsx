import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ImageGallery } from '@/components/ImageGallery'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Viandas Corporativas Rosario',
  serviceType: 'Viandas corporativas para empresas',
  provider: { '@type': 'Organization', name: 'Aldeitas Food', url: 'https://aldeitasfood.com.ar/' },
  areaServed: { '@type': 'City', name: 'Rosario, Santa Fe, Argentina' },
  description: 'Servicio de viandas corporativas para empresas de Rosario. Cocina propia, entrega diaria, propuesta a medida.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'ARS' } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

      {/* HERO SECTION - SPLIT SCREEN STYLE */}
      <section className="hero-viandas" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', marginBottom: '80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.9rem' }}>Socio Gastronómico para Empresas</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '32px' }}>
              El almuerzo de tu equipo,<br /><em>elevado.</em>
            </h1>
            <p className="section-sub" style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-light)' }}>
              Convertimos la pausa del almuerzo en un momento de bienestar y productividad.
              Cocinamos con ingredientes reales, entregamos con puntualidad suiza.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <ModalTrigger tipo="empresa" className="btn btn-primary">
                Solicitar Propuesta
              </ModalTrigger>
              <a href="#como-funciona" className="btn btn-gold">Saber más</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', height: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/viandas_hero.png`}
              alt="Viandas Gourmet Aldeitas"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '24px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--green)', fontSize: '1.2rem' }}>+35</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Empresas confían semanalmente</div>
                </div>
                <div style={{ width: '1px', height: '30px', background: 'rgba(0,0,0,0.1)' }}></div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--gold)', fontSize: '1.2rem' }}>100%</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Ingredientes Naturales</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIALES SECTION */}
      <section id="como-funciona" style={{ padding: '120px 0', background: 'var(--green-light)' }}>
        <div className="container">
          <AnimateOnScroll>
            <div className="text-center" style={{ marginBottom: '80px' }}>
              <span className="section-label">Excelencia Operativa</span>
              <h2 className="section-title">¿Por qué elegir Aldeitas Food?</h2>
              <p className="section-sub">Simplificamos la logística gastronómica de tu empresa con un servicio premium y personalizado.</p>
            </div>
          </AnimateOnScroll>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}
          >
            {[
              {
                icon: '🌿',
                title: 'Calidad Nutricional',
                text: 'Menús balanceados diseñados por expertos para mantener la energía y salud de tu equipo de trabajo.'
              },
              {
                icon: '🚚',
                title: 'Logística Propia',
                text: 'Controlamos toda la cadena de frío y entrega para asegurar que la comida llegue perfecta, siempre a tiempo.'
              },
              {
                icon: '💎',
                title: 'Servicio Flexible',
                text: 'Nos adaptamos a cambios de último momento, dietas especiales y requerimientos específicos de tu operación.'
              }
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '48px', transition: 'transform 0.3s ease' }}
                whileHover={{ y: -10 }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{icon}</div>
                <h3 style={{ fontWeight: 800, color: 'var(--dark)', marginBottom: '16px', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>{title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MENU SHOWCASE - VISUAL INTERACTION */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
            <AnimateOnScroll direction="left">
              <div>
                <span className="section-label" style={{ color: 'var(--gold)' }}>Variedad y Frescura</span>
                <h2 className="section-title">Un menú que nunca aburre.</h2>
                <p className="section-sub" style={{ marginBottom: '32px' }}>
                  Rotamos nuestros platos semanalmente para ofrecer variedad y estacionalidad.
                  Desde clásicos reconfortantes hasta propuestas internacionales livianas.
                </p>
                <ul style={{ marginBottom: '40px' }}>
                  {['Opciones vegetarianas y celíacas', 'Presentación impecable', 'Porciones generosas', 'Ingredientes de estación'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontWeight: 600, color: 'var(--green)' }}>
                      <span style={{ width: '24px', height: '24px', background: 'var(--green-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ModalTrigger tipo="empresa" className="btn btn-primary">Ver Menú de esta Semana</ModalTrigger>
              </div>
            </AnimateOnScroll>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { img: 'plato1.png', title: 'Healthy Bowl' },
                { img: 'plato2.png', title: 'Gourmet Pasta' },
                { img: 'plato3.png', title: 'Fresh Salad' },
                { img: 'plato4.png', title: 'Premium Grill' }
              ].map((item, idx) => (
                <AnimateOnScroll key={idx} delay={idx * 0.1}>
                  <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '250px', boxShadow: 'var(--shadow)' }}>
                    <img src={`${import.meta.env.BASE_URL}assets/${item.img}`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
                      <span style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="section-title">Preguntas Frecuentes</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: '¿Cuál es la cantidad mínima de viandas?', a: 'Trabajamos con empresas desde 10 colaboradores. Nos adaptamos a diferentes escalas operativas.' },
              { q: '¿En qué zonas entregan?', a: 'Rosario, Gran Rosario y cordón industrial. Consultanos por zonas específicas de logística diaria.' },
              { q: '¿Tienen opciones para dietas especiales?', a: 'Sí, contamos con platos aptos para celíacos, vegetarianos, veganos y bajos en sodio.' },
              { q: '¿Cómo es el sistema de facturación?', a: 'Ofrecemos facturación corporativa mensual o quincenal con múltiples medios de pago.' },
            ].map(({ q, a }, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1}>
                <details style={{ background: 'var(--white)', borderRadius: '15px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <summary style={{ fontWeight: 700, cursor: 'pointer', color: 'var(--dark)', fontSize: '1.1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {q}
                    <span style={{ color: 'var(--gold)' }}>+</span>
                  </summary>
                  <p style={{ marginTop: '16px', color: 'var(--text-light)', lineHeight: 1.8 }}>{a}</p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ImageGallery />
    </main>
  )
}
