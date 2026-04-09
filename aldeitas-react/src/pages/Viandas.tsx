import { ImageGallery } from '@/components/ImageGallery'
import { ModalTrigger } from '@/components/ModalTrigger'

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

export default function Viandas() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />

      <section style={{ padding: '80px 0', background: 'var(--green-light)' }}>
        <div className="container text-center">
          <span className="section-label">Aldeitas Food</span>
          <h1 className="section-title">Viandas corporativas<br />en Rosario y zona.</h1>
          <p className="section-sub" style={{ marginBottom: '32px' }}>
            Cocinamos todos los días para que el almuerzo de tu equipo simplemente funcione.
            Más de 35 empresas ya confían en nosotros.
          </p>
          <ModalTrigger tipo="empresa" className="btn btn-primary">
            Solicitar propuesta sin compromiso
          </ModalTrigger>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">¿Cómo funciona el servicio?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {[
              { icon: '📞', title: 'Nos contactás', text: 'Nos contás tu necesidad: cuánta gente, horarios, zona de entrega y preferencias.' },
              { icon: '📋', title: 'Armamos la propuesta', text: 'En 24 horas tenés una propuesta a medida. Sin compromisos.' },
              { icon: '🍽️', title: 'Empezamos a cocinar', text: 'Cocina propia, entrega puntual, todos los días laborables.' },
            ].map(({ icon, title, text }) => (
              <div key={title} style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{icon}</div>
                <h3 style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <h2 className="section-title">Preguntas frecuentes</h2>
          {[
            { q: '¿Cuál es la cantidad mínima de viandas?', a: 'Trabajamos con empresas de diferentes tamaños. Contactanos y encontramos la solución adecuada a tu operación.' },
            { q: '¿En qué zonas entregan?', a: 'Rosario, Gran Rosario y zona metropolitana de Santa Fe. Para zonas más alejadas, consultanos.' },
            { q: '¿Puedo cambiar el menú?', a: 'Sí. Diseñamos la propuesta a medida y podemos ajustar el menú según tus necesidades y las de tu equipo.' },
            { q: '¿Tienen certificaciones de higiene?', a: 'Nuestra cocina cumple con todas las normativas municipales y provinciales de higiene alimentaria.' },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', color: 'var(--dark)', fontSize: '1rem' }}>{q}</summary>
              <p style={{ marginTop: '12px', color: 'var(--text-light)', lineHeight: 1.7 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <ImageGallery />
    </main>
  )
}
