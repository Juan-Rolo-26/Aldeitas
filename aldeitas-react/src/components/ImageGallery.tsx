const DEFAULT_IMAGES = [
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (11).jpg`,
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (15).jpg`,
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (20).jpg`,
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (32).jpg`,
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (34).jpg`,
    `${import.meta.env.BASE_URL}assets/La Aldea - Alta (53).jpg`,
]

export function ImageGallery({ images = DEFAULT_IMAGES, title = "Nuestra cocina en imágenes" }: { images?: string[], title?: string }) {
    return (
        <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
            <div className="container text-center">
                <div style={{ marginBottom: '48px' }}>
                    <span className="section-label">Galería</span>
                    <h2 className="section-title">{title}</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                    {images.map((src, i) => (
                        <div key={i} style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <img
                                src={src}
                                alt={`Galería Aldeitas Food ${i + 1}`}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
