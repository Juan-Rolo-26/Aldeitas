import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'
import type { Variants } from 'framer-motion'

/* ─── Animated counter hook with Framer Motion ─────────────────────────── */
function AnimatedCounter({ value, prefix = '', suffix = '', label }: { value: number, prefix?: string, suffix?: string, label: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    })
    return () => controls.stop()
  }, [value])

  const formatted = displayValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <motion.div
      className="hero-stat"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="hero-stat-num">{prefix}{formatted}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </motion.div>
  )
}

/* ─── Star Rating with micro-animation ────────────────────────────────────── */
function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="hero-stars" aria-label={`${n} estrellas`}>
      {Array.from({ length: n }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "backOut" }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
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
    'Más de 10 años'
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "circOut" }
    }
  }

  return (
    <section id="hero" aria-label="Hero principal">

      {/* ── LEFT: media with subtle parallax ── */}
      <motion.div
        className="hero-media"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <video
          autoPlay muted loop playsInline preload="auto"
          poster={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (3).jpg`}
          src={`${import.meta.env.BASE_URL}assets/video_hero.mp4`}
        />
        <div className="hero-media-overlay" />

        <motion.button
          className="hero-pause-btn"
          aria-label="Pausar video"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        </motion.button>
      </motion.div>

      {/* ── RIGHT: content staggered ── */}
      <motion.div
        className="hero-content-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Stars + tagline */}
        <motion.div className="hero-rating-row" variants={itemVariants}>
          <Stars />
          <span className="hero-rating-text">
            Amado por <strong>+200 empresas</strong> en Santa Fe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 className="hero-headline" variants={itemVariants}>
          Comé <em>mejor,</em><br /> todos los días.
        </motion.h1>

        {/* Sub */}
        <motion.p className="hero-subtext" variants={itemVariants}>
          Viandas corporativas y congelados artesanales, elaborados
          con ingredientes frescos y cocina propia. Sin suscripción obligatoria.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px 0' }}
          variants={itemVariants}
        >
          <motion.a
            href="#contacto"
            className="hero-cta"
            whileHover={{ scale: 1.05, backgroundColor: '#c9a227' }}
            whileTap={{ scale: 0.95 }}
          >
            Pedir cotización
          </motion.a>
        </motion.div>

        {/* Stats mini */}
        <motion.div className="hero-mini-stats" variants={itemVariants}>
          <AnimatedCounter value={10} prefix="+" suffix=" años" label="de experiencia" />
          <div className="hero-mini-divider" />
          <AnimatedCounter value={5000} suffix="+" label="viandas diarias" />
          <div className="hero-mini-divider" />
          <AnimatedCounter value={200} prefix="+" label="clientes activos" />
        </motion.div>
      </motion.div>

      {/* ── MARQUEE bar ── */}
      <motion.div
        className="hero-marquee-bar"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="hero-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="hero-marquee-item">
              <span className="hero-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
