import { AnimateOnScroll } from './AnimateOnScroll'
import { ModalTrigger } from './ModalTrigger'

export function Distribucion() {
  return (
    <section id="distribucion" aria-labelledby="dist-title">
      <div className="container">
        <AnimateOnScroll className="distribucion-card">

          <div>
            <div className="distribucion-badge">Aldeitas Congelados — Distribución</div>
            <h2 id="dist-title">
              ¿Tenés un negocio? Sumá Aldeitas Congelados a tu propuesta.
            </h2>
            <p>
              Buscamos distribuidores y puntos de venta que compartan nuestra forma de entender la comida. Si
              tenés una despensa, un almacén, un mercado o cualquier negocio donde nuestros productos puedan
              llegar a más mesas, queremos conocerte.
            </p>
          </div>

          <div>
            <ModalTrigger tipo="congelados" className="btn btn-white" aria-label="Quiero ser distribuidor de Aldeitas Congelados">
              Quiero ser distribuidor
            </ModalTrigger>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  )
}
