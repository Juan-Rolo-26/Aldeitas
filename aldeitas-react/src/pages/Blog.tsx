import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <main className="blog-page" style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label" style={{ color: 'var(--gold)' }}>Aldeitas Blog</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '24px' }}>
              Próximamente
            </h1>
            <p className="section-sub" style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '60px' }}>
              Estamos cocinando nuestro blog. Muy pronto vas a encontrar recetas, consejos de nutrición y novedades sobre bienestar corporativo.
            </p>

            <div style={{ background: 'var(--green-light)', padding: '60px', borderRadius: '40px', boxShadow: 'var(--shadow)' }}>
              <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: 'var(--green)' }}>
                ¿Querés ser el primero en enterarte?
              </h2>
              <p style={{ marginBottom: '32px', color: 'var(--text-light)' }}>
                Dejanos tu email y te avisamos cuando estemos online.
              </p>
              <form
                style={{ display: 'flex', gap: '12px', background: 'var(--white)', padding: '8px', borderRadius: '50px', boxShadow: 'var(--shadow)', maxWidth: '500px', margin: '0 auto' }}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  style={{ flex: 1, border: 'none', padding: '0 24px', borderRadius: '50px', outline: 'none', fontSize: '1rem' }}
                />
                <button className="btn btn-primary" style={{ padding: '12px 32px' }}>Avisarme</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
