import { ModalTrigger } from '@/components/ModalTrigger'

export default function Congelados() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container text-center">
          <span className="section-label">Aldeitas en casa</span>
          <h1 className="section-title">Productos Congelados y Distribución</h1>
          <p className="section-sub" style={{ marginBottom: '40px' }}>
            Llevamos la calidad de nuestra cocina a tu freezer o a tu negocio.
            Soluciones prácticas, ricas y naturales.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '60px', textAlign: 'left' }}>
            <div style={{ background: 'var(--off-white)', padding: '48px', borderRadius: 'var(--radius-lg)' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Para tu casa</h2>
              <p style={{ marginBottom: '24px', color: 'var(--text-light)' }}>
                Nuestra línea de alimentos congelados está pensada para quienes no quieren
                renunciar a comer bien por falta de tiempo. Sin conservantes, solo comida real.
              </p>
              <div style={{ position: 'relative', height: '300px', marginBottom: '24px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/Congelados1.png`}
                  alt="Línea de congelados Aldeitas"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <ModalTrigger tipo="congelados" className="btn btn-gold">
                Ver catálogo de congelados
              </ModalTrigger>
            </div>

            <div style={{ background: 'var(--dark)', color: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-lg)' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--white)' }}>Distribución</h2>
              <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>
                Si tenés un negocio, buffet o comedor, podemos ser tu socio logístico.
                Distribuimos nuestros productos con la frecuencia y seriedad que tu negocio necesita.
              </p>
              <ul style={{ marginBottom: '32px', listStyle: 'none', padding: 0 }}>
                {['Entregas programadas', 'Stock permanente', 'Precios mayoristas', 'Calidad garantizada'].map(i => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--gold)', marginRight: '10px' }}>✓</span> {i}
                  </li>
                ))}
              </ul>
              <ModalTrigger tipo="empresa" className="btn btn-outline-white">
                Consultar por distribución
              </ModalTrigger>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
