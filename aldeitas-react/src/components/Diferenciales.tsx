import { AnimateOnScroll } from './AnimateOnScroll'

export function Diferenciales() {
  return (
    <section id="sobre-nosotros-equipo" aria-labelledby="equipo-title">
      <div className="presentacion-grid">

        {/* Columna Imagen */}
        <AnimateOnScroll className="presentacion-img-col" delay={1}>
          <img
            src={`${import.meta.env.BASE_URL}assets/Equipo%20de%20trabajo.jpeg`}
            alt="El equipo de trabajo de Aldeitas Food conformando la cocina y administración"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              transform: 'scale(1.12)',
              transformOrigin: 'center center'
            }}
            loading="lazy"
          />
        </AnimateOnScroll>

        {/* Columna Contenido */}
        <AnimateOnScroll className="presentacion-content" delay={2}>
          <span className="section-label">Sobre nosotros</span>
          <h2 id="equipo-title" className="presentacion-title">
            El equipo de trabajo
          </h2>

          <div className="pres-divider" />

          <p className="presentacion-sub">
            Detrás de cada plato que llega a tu mesa, hay un grupo humano comprometido con la excelencia,
            el sabor casero y la calidad. Profesionales apasionados por la cocina que hacen de Aldeitas una verdadera familia.
          </p>

          <div className="pres-divider" />

          <div style={{ marginTop: '20px', maxWidth: '650px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#1a1a1a', marginBottom: '16px' }}>
              Nuestro motor principal: la gente
            </h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '16px' }}>
              En Aldeitas creemos que la verdadera diferencia en el servicio de viandas corporativas no está solo en los
              ingredientes frescos, sino en las manos que los preparan. Nuestro equipo está compuesto por chefs de oficio y especialistas con una sola misión: tu bienestar.
            </p>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
