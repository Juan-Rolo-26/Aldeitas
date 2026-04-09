

import { useEffect, useRef } from 'react'

interface Props {
  target: number
  prefix?: string
}

export function Counter({ target, prefix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1800
          const start = performance.now()
          const update = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            el.textContent = prefix + Math.floor(ease * target).toLocaleString('es-AR')
            if (progress < 1) requestAnimationFrame(update)
            else el.textContent = prefix + target.toLocaleString('es-AR')
          }
          requestAnimationFrame(update)
          observer.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, prefix])

  return (
    <span ref={ref}>
      {prefix}{target.toLocaleString('es-AR')}
    </span>
  )
}
