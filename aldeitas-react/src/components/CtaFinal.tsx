
import { AnimateOnScroll } from './AnimateOnScroll'
import { ModalTrigger } from './ModalTrigger'

const WA = import.meta.env.VITE_WA_NUMBER ?? '549XXXXXXXXXX'
const WA_TEXT = encodeURIComponent('Hola, me interesa saber más sobre Aldeitas Food')

export function CtaFinal() {
  return (
    <section id="cta-final" aria-labelledby="cta-title">
      <div className="cta-final-bg" aria-hidden="true">
        <img
          src="/assets/La Aldea - Alta (22).jpg"
          alt=""
          width={1920}
          height={600}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
        />
      </div>
      <div className="container">
        <AnimateOnScroll className="cta-final-inner">

          <span className="section-label">¿Listo para empezar?</span>
          <h2 id="cta-title" className="section-title">
            Contanos qué necesitás y armamos una solución a tu medida.
          </h2>
          <p className="section-sub">
            Ya sea para tu empresa o para tu casa, en Aldeitas hay una cocina lista para ocuparse. Escribinos y conversemos.
          </p>

          <div className="cta-actions">
            <ModalTrigger tipo="empresa" className="btn btn-gold" aria-label="Consultar sobre viandas para empresas">
              Para empresas
            </ModalTrigger>
            <ModalTrigger tipo="congelados" className="btn btn-outline-white" aria-label="Ver productos congelados Aldeitas">
              Ver congelados
            </ModalTrigger>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  )
}
