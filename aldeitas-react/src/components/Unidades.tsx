
import { AnimateOnScroll } from './AnimateOnScroll'
import { ModalTrigger } from './ModalTrigger'

export function Unidades() {
  return (
    <section id="unidades" aria-labelledby="unidades-title">
      <div className="container">

        <AnimateOnScroll className="unidades-header">
          <span className="section-label">Nuestros servicios</span>
          <h2 id="unidades-title" className="section-title">Dos formas de resolver tus comidas.</h2>
        </AnimateOnScroll>

        <div className="unidades-grid">

          {/* Viandas corporativas */}
          <AnimateOnScroll as="article" className="unidad-card food" delay={1} aria-label="Viandas corporativas">
            <img
              className="unidad-img"
              src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (18).jpg`}
              alt="Cocina de Aldeitas Food en Rosario preparando viandas corporativas"
              width={560}
              height={520}
              loading="lazy"
            />
            <div className="unidad-overlay" aria-hidden="true" />
            <div className="unidad-body">
              <span className="unidad-badge">Aldeitas Food</span>
              <h3>Viandas corporativas</h3>
              <p>
                Cocinamos todos los días para empresas que necesitan que el almuerzo de su equipo simplemente
                funcione. Adaptamos cada propuesta a lo que tu empresa necesita: cantidad, variedad, frecuencia,
                logística. Te ocupás de tu trabajo. Del resto, nos ocupamos nosotros.
              </p>
              <ModalTrigger tipo="empresa" className="btn btn-gold" aria-label="Solicitar propuesta de viandas corporativas">
                Consultar propuesta
              </ModalTrigger>
            </div>
          </AnimateOnScroll>

          {/* Congelados */}
          <AnimateOnScroll as="article" className="unidad-card congelados" delay={2} aria-label="Productos congelados Aldeitas">
            <img
              className="unidad-img"
              src={`${import.meta.env.BASE_URL}assets/Congelados1.png`}
              alt="Línea de productos congelados Aldeitas para hogares"
              width={560}
              height={520}
              loading="lazy"
            />
            <div className="unidad-overlay" aria-hidden="true" />
            <div className="unidad-body">
              <span className="unidad-badge">Aldeitas Congelados</span>
              <h3>Productos congelados</h3>
              <p>
                Llevamos nuestra cocina también a tu casa, con una línea de productos congelados pensada para tener
                siempre una buena comida a mano. Comida real, hecha con el mismo cuidado que ponemos en cada vianda
                corporativa, lista para resolver el día.
              </p>
              <ModalTrigger tipo="congelados" className="btn btn-outline-blue" aria-label="Solicitar propuesta de congelados Aldeitas">
                Consultar propuesta
              </ModalTrigger>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
