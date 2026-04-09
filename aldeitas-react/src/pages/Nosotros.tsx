export default function Nosotros() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container text-center">
          <span className="section-label">Nuestra historia</span>
          <h1 className="section-title">Una cocina que viene de familia.</h1>
          <p className="section-sub" style={{ marginBottom: '48px' }}>
            Aldeitas Food nació en 2016 en Rosario con una sola idea: cocinar para otros como si fuera para los nuestros.
            Hoy somos una de las empresas de viandas corporativas más importantes de la provincia de Santa Fe.
          </p>

          <div className="presentacion-grid" style={{ textAlign: 'left', marginTop: '60px' }}>
            <div className="presentacion-img-col">
              <img
                src="/assets/La Aldea - Alta (10).jpg"
                alt="El equipo de Aldeitas Food en la cocina central de Rosario"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                loading="lazy"
              />
              <div className="presentacion-img-overlay" />
            </div>
            <div className="presentacion-content" style={{ background: 'var(--white)', padding: '60px' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Mercedes Cura, fundadora</h2>
              <p className="section-sub">
                Mercedes creó Aldeitas con la convicción de que la comida de empresa puede ser buena comida.
                No algo tolerado, sino algo esperado. Ese estándar sigue siendo el motor de todo.
              </p>

              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '16px', color: 'var(--dark)' }}>
                  Preguntas frecuentes
                </h3>
                {[
                  {
                    q: '¿Desde cuándo están operando?',
                    a: 'Desde 2016, operando de manera continua en Rosario y zona metropolitana de Santa Fe.',
                  },
                  {
                    q: '¿Tienen cocina propia?',
                    a: 'Sí. Toda la producción se realiza en nuestra cocina central ubicada en José M. Rosas 3115 bis, Rosario.',
                  },
                  {
                    q: '¿Cuántas empresas atienden?',
                    a: 'Más de 35 empresas confían en nosotros todos los días, incluyendo clientes como Paladini, SKF, Makro y Gerdau.',
                  },
                ].map(({ q, a }) => (
                  <details key={q} style={{ borderBottom: '1px solid #eee', padding: '14px 0' }}>
                    <summary style={{ fontWeight: 700, cursor: 'pointer', color: 'var(--dark)' }}>{q}</summary>
                    <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-light)' }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
