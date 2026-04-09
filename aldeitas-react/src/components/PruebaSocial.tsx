import { AnimateOnScroll } from './AnimateOnScroll'

const clientes = [
  'Paladini',
  { name: 'Gerdau', sub: 'Siderco' },
  'Makro',
  'SKF',
  'Marangoni',
  'Loginter',
  { name: 'Mundo', sub: 'Construcciones' },
  { name: 'Fundación', sub: 'Biotar' },
  'Laromet',
  'Centinela',
  'Tyssa',
  { name: 'Brunetti', sub: 'Hnos.' },
]

export function PruebaSocial() {
  return (
    <section id="prueba-social" aria-labelledby="clientes-title">
      <div className="container">

        {/* Clientes */}
        <AnimateOnScroll className="clientes-header">
          <span className="section-label">Clientes que confían</span>
          <h2 id="clientes-title" className="section-title">Empresas que ya confían en Aldeitas.</h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="logos-grid" role="list" aria-label="Clientes de Aldeitas Food">
          {clientes.map((c, i) => {
            const name = typeof c === 'string' ? c : c.name
            const sub = typeof c === 'string' ? null : c.sub
            return (
              <div key={i} className="logo-item" role="listitem">
                {name}
                {sub && <><br /><small>{sub}</small></>}
              </div>
            )
          })}
        </AnimateOnScroll>

      </div>
    </section>
  )
}
