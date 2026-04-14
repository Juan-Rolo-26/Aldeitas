import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ModalTrigger } from '@/components/ModalTrigger'

export default function Contacto() {
  return (
    <main className="contacto-page" style={{ paddingTop: '120px' }}>
      <section style={{ padding: '60px 0 120px' }}>
        <div className="container">
          <div className="page-split-grid" style={{ gap: '80px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Hablemos</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>¿Cómo podemos ayudarte?</h1>
              <p className="section-sub" style={{ marginBottom: '48px' }}>
                Estamos listos para potenciar la alimentación de tu equipo o negocio.
                Elegí la opción que mejor se adapte a tu necesidad y un asesor te contactará a la brevedad.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--green-light)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Visitamos en nuestra cocina</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Jose M. Rosas 3115 bis, Rosario, SF.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--gold-light)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Atención inmediata</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Lun a Vie, 8 a 17 hs.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--blue-light)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✉️</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Escribinos</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>hola@aldeitasfood.com.ar</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
              <AnimateOnScroll direction="right">
                <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '35px', boxShadow: 'var(--shadow-hover)', border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} className="hover-lift">
                  <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Corporativo</h3>
                    <span style={{ padding: '6px 14px', background: 'var(--green-light)', color: 'var(--green)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Empresas</span>
                  </div>
                  <p style={{ color: 'var(--text-light)', marginBottom: '32px', lineHeight: 1.6 }}>
                    Si buscás viandas diarias para tu equipo, catering corporativo o soluciones para grandes plantas industriales.
                  </p>
                  <ModalTrigger tipo="empresa" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Solicitar Propuesta B2B
                  </ModalTrigger>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right" delay={0.2}>
                <div style={{ background: 'var(--white)', padding: '48px', borderRadius: '35px', boxShadow: 'var(--shadow-hover)', border: '1px solid rgba(0,0,0,0.05)' }} className="hover-lift">
                  <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Retail / Hogar</h3>
                    <span style={{ padding: '6px 14px', background: 'var(--gold-light)', color: 'var(--gold)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Congelados</span>
                  </div>
                  <p style={{ color: 'var(--text-light)', marginBottom: '32px', lineHeight: 1.6 }}>
                    Para compras particulares, stock para tu local o distribución de nuestra línea de productos IQF.
                  </p>
                  <ModalTrigger tipo="congelados" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    Consultar Catálogo
                  </ModalTrigger>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* MAP OR FINAL CTA */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div style={{ height: '400px', background: '#eee', borderRadius: '40px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/cocina_oficio.png`}
              alt="Nuestra Cocina"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: 'var(--white)', padding: '30px 50px', borderRadius: '20px', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>Vení a conocernos</h4>
                <p style={{ color: 'var(--text-light)' }}>Transparencia total en cada proceso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
