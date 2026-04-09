

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000, startOnVisible = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!startOnVisible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started, startOnVisible])

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}

function AnimatedStat({
  value,
  prefix = '',
  suffix = '',
  label,
  decimals = false,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  decimals?: boolean
}) {
  const { count, ref } = useCountUp(value, 2200)

  const display = decimals
    ? (count / 10).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    : count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <div className="hero-stat">
      <span className="hero-stat-num" ref={ref}>
        {prefix}{display}{suffix}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero" aria-label="Hero principal">

      {/* Video de fondo */}
      <div className="hero-video-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/La Aldea - Alta (3).jpg"
        >
          <source src="/assets/video_hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido sobre el video */}
      <div className="hero-body">
        <div className="hero-top container">
          <div className="hero-content">
            <h1 className="hero-title">
              Aldeitas Food
            </h1>
          </div>
        </div>

        {/* Métricas full-width */}
        <div className="hero-stats-bar">
          <div className="hero-stats-inner">
            <AnimatedStat value={10} prefix="+" suffix="" label="años de experiencia" />
            <AnimatedStat value={5000} prefix="" suffix="+" label="viandas diarias" />
            <AnimatedStat value={100} prefix="" suffix="%" label="cocina propia" />
            <AnimatedStat value={200} prefix="+" suffix="" label="clientes activos" />
          </div>
        </div>
      </div>
    </section>
  )
}
