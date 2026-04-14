import { AnimateOnScroll } from './AnimateOnScroll'

export function PruebaSocial() {
  const marcasCount = 15;
  const marcasIndices = Array.from({ length: marcasCount }, (_, i) => i + 1);

  return (
    <section id="prueba-social" aria-labelledby="clientes-title">
      <div className="container">

        {/* Clientes */}
        <AnimateOnScroll className="clientes-header">
          <span className="section-label">Clientes que confían</span>
          <h2 id="clientes-title" className="section-title">Empresas que ya confían en Aldeitas.</h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="logos-grid" role="list" aria-label="Clientes de Aldeitas Food">
          {marcasIndices.map((index) => (
            <div key={index} className="logo-item" role="listitem">
              <img
                src={`${import.meta.env.BASE_URL}assets/marcas/${index}.png`}
                alt={`Cliente Aldeitas ${index}`}
                loading="lazy"
                title={`Marca ${index}`}
              />
            </div>
          ))}
        </AnimateOnScroll>

      </div>
    </section>
  )
}
