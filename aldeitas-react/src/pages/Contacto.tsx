import { ModalTrigger } from '@/components/ModalTrigger'

export default function Contacto() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container text-center">
          <span className="section-label">Contacto</span>
          <h1 className="section-title">Estamos para ayudarte.</h1>
          <p className="section-sub" style={{ marginBottom: '40px' }}>
            Ya sea para una oficina de 10 personas o una planta de 500,
            tenemos una propuesta que se adapta a vos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '60px auto 0', textAlign: 'left' }}>
            <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '16px' }}>Empresas</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '24px' }}>
                Si buscás viandas para tu equipo, catering corporativo o distribución a gran escala.
              </p>
              <ModalTrigger tipo="empresa" className="btn btn-primary w-full">
                Consultar propuesta corporativa
              </ModalTrigger>
            </div>

            <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '16px' }}>Particulares / Retail</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '24px' }}>
                Si querés comprar congelados para tu casa o tenés un comercio y querés vender nuestros productos.
              </p>
              <ModalTrigger tipo="congelados" className="btn btn-gold w-full">
                Consultar por congelados
              </ModalTrigger>
            </div>
          </div>

          <div style={{ marginTop: '80px', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
            <p style={{ fontWeight: 600 }}>Nuestra cocina central:</p>
            <p style={{ color: 'var(--text-light)' }}>Jose M. Rosas 3115 bis, Rosario, Santa Fe.</p>
            <p style={{ color: 'var(--text-light)', marginTop: '8px' }}>Lunes a Viernes de 8:00 a 17:00 hs.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
