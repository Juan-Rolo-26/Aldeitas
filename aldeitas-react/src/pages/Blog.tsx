import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const posts = [
  {
    title: '5 Consejos para un almuerzo saludable en la oficina',
    category: 'Nutrición',
    date: '12 Abr, 2026',
    excerpt: 'Optimizar tu tiempo no significa sacrificar tu salud. Te contamos cómo organizar tus comidas...',
    image: 'plato1.png'
  },
  {
    title: 'El arte del ultracongelado: Cómo mantenemos la frescura',
    category: 'Tecnología',
    date: '08 Abr, 2026',
    excerpt: 'Descubrí el proceso detrás de nuestra línea de congelados y por qué saben como recién hechos.',
    image: 'plato2.png'
  },
  {
    title: 'Nuevos horizontes: LLegamos a Gran Rosario',
    category: 'Novedades',
    date: '02 Abr, 2026',
    excerpt: 'Expandimos nuestra red de distribución para que Aldeitas esté cada vez más cerca tuyo.',
    image: 'plato3.png'
  },
  {
    title: 'Receta: Bowl de Quinoa y Vegetales de Estación',
    category: 'Recetas',
    date: '28 Mar, 2026',
    excerpt: 'Aprendé a preparar uno de nuestros platos estrella en la comodidad de tu casa.',
    image: 'plato4.png'
  }
]

export default function Blog() {
  return (
    <main className="blog-page" style={{ paddingTop: '120px' }}>
      {/* HERO */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div style={{ position: 'relative', height: '500px', borderRadius: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/blog_hero.png`}
              alt="Aldeitas Blog Hero"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ position: 'relative', zIndex: 1, color: 'var(--white)', padding: '0 20px' }}
            >
              <span className="section-label" style={{ color: 'var(--gold)' }}>Aldeitas Blog</span>
              <h1 className="section-title" style={{ color: 'var(--white)', fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>Novedades y Recetas</h1>
              <p className="section-sub" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px' }}>
                Compartimos nuestro amor por la cocina saludable y consejos para mejorar tu bienestar diario.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {posts.map((post, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1}>
                <article style={{ background: 'var(--white)', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/${post.image}`}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <span style={{ color: 'var(--gold)' }}>{post.category}</span>
                      <span style={{ color: 'var(--text-light)' }}>{post.date}</span>
                    </div>
                    <h3 style={{ marginBottom: '16px', fontSize: '1.4rem', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>{post.excerpt}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <a href="#" style={{ color: 'var(--green)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Leer artículo completo <span style={{ fontSize: '1.2rem' }}>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '100px 0', background: 'var(--green-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Suscribite a nuestro newsletter</h2>
            <p className="section-sub" style={{ marginBottom: '40px' }}>Recibí el menú semanal y novedades de salud directamente en tu correo.</p>
            <form style={{ display: 'flex', gap: '12px', background: 'var(--white)', padding: '8px', borderRadius: '50px', boxShadow: 'var(--shadow)' }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                style={{ flex: 1, border: 'none', padding: '0 24px', borderRadius: '50px', outline: 'none', fontSize: '1rem' }}
              />
              <button className="btn btn-primary" style={{ padding: '12px 32px' }}>Suscribirme</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
