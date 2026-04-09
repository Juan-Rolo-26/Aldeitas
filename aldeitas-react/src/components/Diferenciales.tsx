import { AnimateOnScroll } from './AnimateOnScroll'


const items = [
  {
    image: `${import.meta.env.BASE_URL}assets/cocina_oficio.png`,
    title: 'Cocina con oficio.',
    text: 'Lo que hacemos viene de una tradición. Sabemos cocinar, sabemos lo que estamos haciendo, y nos importa hacerlo bien.',
  },
  {
    image: `${import.meta.env.BASE_URL}assets/atencion_cliente.png`,
    title: 'Atentos a cada cliente.',
    text: 'Cada empresa tiene una necesidad distinta. Escuchamos, nos adaptamos, nos hacemos cargo. No vendemos un menú cerrado: armamos la solución que cada uno necesita.',
  },
  {
    image: `${import.meta.env.BASE_URL}assets/compromiso_dia.png`,
    title: 'Compromiso con el día a día.',
    text: 'Cumplimos los tiempos because sabemos que esto es parte de tu operación. Todos los días, sin excepciones.',
  },
  {
    image: `${import.meta.env.BASE_URL}assets/equipo_real.png`,
    title: 'Equipo real.',
    text: 'Detrás de cada plato hay un grupo de personas que eligió hacer esto bien. Cocineros, administración, logística, atención. Cada uno hace que esto funcione.',
  },
]

export function Diferenciales() {
  return (
    <section id="diferenciales" aria-labelledby="diferenciales-title" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="container-fluid" style={{ maxWidth: '1800px', margin: '0 auto', padding: '0 40px' }}>

        <AnimateOnScroll className="diferenciales-header">
          <span className="section-label">Por qué elegirnos</span>
          <h2 id="diferenciales-title" className="section-title">Por qué Aldeitas</h2>
          <p className="section-sub">Cuatro pilares que definen cómo trabajamos todos los días.</p>
        </AnimateOnScroll>

        <div className="diferenciales-grid">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} as="article" className="diferencial-card" delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div aria-hidden="true" style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <img src={item.image} alt={item.title} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ marginBottom: '16px' }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
