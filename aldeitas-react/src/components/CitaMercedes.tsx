import { AnimateOnScroll } from './AnimateOnScroll'

export function CitaMercedes() {
  return (
    <section id="cita" aria-label="Mensaje de Mercedes Cura, fundadora">
      <div className="container">
        <AnimateOnScroll className="cita-inner">

          <blockquote className="cita-text">
            Para nosotros, cocinar nunca fue solo un trabajo. Es una forma de cuidar a las personas
            que confían en lo que hacemos. Por eso lo hacemos todos los días con amor, con alegría y con
            entusiasmo — como si fuera para los nuestros.
          </blockquote>

          <div className="cita-author">
            {/* Reemplazar con <img> cuando el cliente entregue la foto de Mercedes */}
            <div className="cita-avatar-placeholder" aria-hidden="true">👩‍🍳</div>
            <div className="cita-info">
              <strong>Mercedes Cura</strong>
              <span>Fundadora de Aldeitas Food</span>
            </div>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  )
}
