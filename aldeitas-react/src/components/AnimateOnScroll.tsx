

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
  as?: keyof JSX.IntrinsicElements
}

export function AnimateOnScroll({ children, className = '', delay, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={`fade-up ${className}`}
      {...(delay ? { 'data-delay': delay } : {})}
    >
      {children}
    </Tag>
  )
}
