
import { useEffect, useRef, useState } from 'react'

/* ─── Animated counter hook ─────────────────────────── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let t: number | null = null
    const step = (ts: number) => {
      if (!t) t = ts
      const p = Math.min((ts - t) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}

function AnimatedStat({
  value, prefix = '', suffix = '', label,
}: { value: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value, 2200)
  const display = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return (
    <div className="hero-stat">
      <span className="hero-stat-num" ref={ref}>{prefix}{display}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}

/* ─── Star Rating ────────────────────────────────────── */
function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="hero-stars" aria-label={`${n} estrellas`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

/* ─── Hero ───────────────────────────────────────────── */
export function Hero() {
  const marqueeItems = [
    'Cocina propia 100%',
    'Sin conservantes',
    'Entrega puntual',
    'Menú semanal variado',
    'Certificado SENASA',
    'Más de 10 años',
    'Cocina propia 100%',
    'Sin conservantes',
    'Entrega puntual',
    'Menú semanal variado',
    'Certificado SENASA',
    'Más de 10 años',
  ]

  return (
    <section id="hero" aria-label="Hero principal">

      {/* ── LEFT: video ── */}
      <div className="hero-media">
        <video
          autoPlay muted loop playsInline preload="auto"
          poster={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (3).jpg`}
          src={`${import.meta.env.BASE_URL}assets/video_hero.mp4`}
        />
        <div className="hero-media-overlay" />

        {/* Pause button (aesthetic) */}
        <button className="hero-pause-btn" aria-label="Pausar video">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        </button>
      </div>

      {/* ── RIGHT: content ── */}
      <div className="hero-content-col">

        {/* Stars + tagline */}
        <div className="hero-rating-row">
          <Stars />
          <span className="hero-rating-text">
            Amado por <strong>+200 empresas</strong> en Buenos Aires
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Comé <em>mejor,</em> todos los días.
        </h1>

        {/* Sub */}
        <p className="hero-subtext">
          Viandas corporativas y congelados artesanales, elaborados
          con ingredientes frescos y cocina propia. Sin suscripción obligatoria.
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px 0' }}>
          <a href="#contacto" className="hero-cta">
            Pedir cotización
          </a>
        </div>

        {/* Stats mini */}
        <div className="hero-mini-stats">
          <AnimatedStat value={10} prefix="+" suffix=" años" label="de experiencia" />
          <div className="hero-mini-divider" />
          <AnimatedStat value={5000} suffix="+" label="viandas diarias" />
          <div className="hero-mini-divider" />
          <AnimatedStat value={200} prefix="+" label="clientes activos" />
        </div>
      </div>

      {/* ── MARQUEE bar ── */}
      <div className="hero-marquee-bar">
        <div className="hero-marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="hero-marquee-item">
              <span className="hero-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
