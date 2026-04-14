import { useState, useEffect, useCallback } from 'react'

const PHRASES = [
    '🌿 Cocina propia 100% artesanal — sin conservantes ni aditivos',
    '✅ Más de 10 años alimentando empresas en Buenos Aires',
    '📦 Entrega puntual a tu empresa, todos los días',
    '⭐ +200 clientes activos confían en Aldeitas Food',
    '🥗 Menú semanal variado — pedís hoy, recibís mañana',
]

export function AnnouncementBar() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [direction, setDirection] = useState<'left' | 'right'>('left')

    const go = useCallback((dir: 'left' | 'right') => {
        if (animating) return
        setAnimating(true)
        setDirection(dir)
        setTimeout(() => {
            setCurrent(prev =>
                dir === 'left'
                    ? (prev + 1) % PHRASES.length
                    : (prev - 1 + PHRASES.length) % PHRASES.length
            )
            setAnimating(false)
        }, 320)
    }, [animating])

    useEffect(() => {
        const id = setInterval(() => go('left'), 4000)
        return () => clearInterval(id)
    }, [go])

    return (
        <div id="announcement-bar" role="region" aria-label="Anuncios">
            <button
                className="ann-arrow ann-arrow-left"
                onClick={() => go('right')}
                aria-label="Frase anterior"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <div className="ann-text-wrap">
                <span
                    className={`ann-text ${animating ? `ann-exit-${direction}` : 'ann-enter'}`}
                    key={current}
                >
                    {PHRASES[current]}
                </span>
            </div>

            <button
                className="ann-arrow ann-arrow-right"
                onClick={() => go('left')}
                aria-label="Frase siguiente"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>


        </div>
    )
}
