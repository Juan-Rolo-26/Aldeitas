import { AnimateOnScroll } from './AnimateOnScroll'

const pasos = [
  { num: '01', title: 'Te escuchamos.', text: 'Entendemos qué necesitás: cuánta gente, qué tipo de comida, qué frecuencia, qué presupuesto.' },
  { num: '02', title: 'Diseñamos la propuesta.', text: 'Armamos una solución a medida, no un menú cerrado.' },
  { num: '03', title: 'Cocinamos.', text: 'Todos los días, en nuestra cocina, con materia prima seleccionada y procesos cuidados.' },
  { num: '04', title: 'Entregamos.', text: 'A tiempo, donde lo necesités. Sin excepciones.' },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" aria-labelledby="como-title">
      <div className="container">

        <AnimateOnScroll className="como-header">
          <span className="section-label">Nuestro proceso</span>
          <h2 id="como-title" className="section-title">
            Así trabajamos <span>todos los días.</span>
          </h2>
          <p className="section-sub">Un método claro detrás de cada entrega.</p>
        </AnimateOnScroll>

        <div className="pasos-grid">
          {pasos.map((paso, i) => (
            <AnimateOnScroll key={paso.num} className="paso-item" delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="paso-num" aria-hidden="true">{paso.num}</div>
              <h3>{paso.title}</h3>
              <p>{paso.text}</p>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
