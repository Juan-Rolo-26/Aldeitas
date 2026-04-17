import { useEffect, useRef, useState } from 'react'

const plates = [
    {
        src: `${import.meta.env.BASE_URL}assets/La Aldea - Alta (34).jpg`,
        alt: 'Ensalada completa',
        label: 'Ensaladas Completas',
    },
    {
        src: `${import.meta.env.BASE_URL}assets/La Aldea - Alta (15).jpg`,
        alt: 'Sándwich rústico con guarnición',
        label: 'Sándwiches Rústicos',
    },
    {
        src: `${import.meta.env.BASE_URL}assets/La Aldea - Alta (20).jpg`,
        alt: 'Wraps',
        label: 'Wraps',
    },
    {
        src: `${import.meta.env.BASE_URL}assets/salmon.png`,
        alt: 'Plato Gourmet Salmón',
        label: 'Platos Gourmet',
    },
    {
        src: `${import.meta.env.BASE_URL}assets/chocotorta.png`,
        alt: 'Postre Chocotorta',
        label: 'Dulces',
    },
]

export function ViandasShowcase() {
    const sectionRef = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="viandas-showcase" ref={sectionRef} aria-label="Nuestras viandas">
            {/* ── Franja verde con platos ── */}
            <div className="vs-plates-band">
                <div className="vs-plates-track">
                    {plates.map((plate, i) => (
                        <div
                            key={plate.label}
                            className={`vs-plate-wrap ${visible ? 'vs-plate-in' : ''}`}
                            style={{ '--delay': `${i * 0.12}s` } as React.CSSProperties}
                        >
                            <div className="vs-plate-img-wrap">
                                <img
                                    src={plate.src}
                                    alt={plate.alt}
                                    className="vs-plate-img"
                                    loading="lazy"
                                />
                            </div>
                            <span className="vs-plate-label">{plate.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Sección de texto ── */}
            <div className="vs-text-band">
                <div className={`vs-text-inner ${visible ? 'vs-text-in' : ''}`}>
                    <h2 className="vs-headline">
                        Comida de verdad. <span className="vs-headline-accent">Sabor real.</span>
                    </h2>
                    <p className="vs-sub">
                        Viandas caseras, nutritivas y deliciosas preparadas con ingredientes frescos cada día.
                        Diseñadas para que comer bien sea lo más fácil del día.
                    </p>
                    <div className="vs-actions">
                        <a href="/viandas" className="btn btn-primary vs-btn-main">
                            Ver menú
                        </a>
                        <a href="/contacto" className="btn btn-outline-green vs-btn-secondary">
                            Hacer un pedido
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
