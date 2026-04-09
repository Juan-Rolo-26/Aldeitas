
import { AnimateOnScroll } from './AnimateOnScroll'

export function QuienesSomos() {
  return (
    <section id="quienes" aria-labelledby="quienes-title">
      <div className="presentacion-grid">

        <AnimateOnScroll className="presentacion-content">
          <span className="presentacion-kicker">Quiénes somos</span>
          <h2 id="quienes-title" className="presentacion-title">
            Una cocina que viene de familia.
          </h2>
          <p className="presentacion-sub">
            Aldeitas Food empezó en 2016, en Rosario, con una sola idea: cocinar para otros como si fuera
            para los nuestros. Hoy entregamos viandas todos los días a empresas de toda la región y somos
            una de las empresas de viandas corporativas más importantes de la provincia de Santa Fe. Pero
            la regla sigue siendo la misma que el primer día.
          </p>
          <div className="presentacion-actions">
            <a to="/nosotros" className="btn btn-outline-green" aria-label="Conocé nuestra historia">
              Conocé nuestra historia
            </a>
          </div>
        </AnimateOnScroll>

        <div className="presentacion-img-col">
          <img
            src="/assets/La Aldea - Alta (10).jpg"
            alt="El equipo de Aldeitas Food cocinando en su cocina central de Rosario"
            style={{objectFit: "cover", width: "100%", height: "100%"}}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
          <div className="presentacion-img-overlay" />
        </div>

      </div>
    </section>
  )
}
