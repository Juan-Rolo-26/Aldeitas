import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { useEffect } from 'react'

export default function AvisoLegal() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main style={{ paddingTop: '120px', background: 'var(--off-white)', minHeight: '100vh' }}>
            <section style={{ padding: '60px 0 100px' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <AnimateOnScroll>
                        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Legal</span>
                        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Aviso Legal</h1>

                        <div className="legal-content" style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)' }}>
                            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text)' }}>
                                Este Aviso Legal regula las condiciones de uso del sitio web de <strong>Aldeitas Food</strong>.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>1. Información General</h2>
                            <p style={{ marginBottom: '16px' }}>
                                En cumplimiento con las normativas vigentes, se informa que este sitio web es propiedad de la marca comercial <strong>Aldeitas Food</strong>,
                                con domicilio operativo en la ciudad de Rosario, provincia de Santa Fe, Argentina.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>2. Propiedad Intelectual</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Todos los contenidos de este sitio web, incluyendo textos, fotografías, logotipos, diseños y código fuente,
                                están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción,
                                distribución o comunicación pública sin la autorización expresa de Aldeitas Food.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>3. Responsabilidad</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Aldeitas Food se esfuerza por mantener la información del sitio actualizada y correcta. No obstante, no se responsabiliza
                                por posibles errores tipográficos o interrupciones técnicas accidentales fuera de nuestro control directo.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>4. Condiciones de Uso</h2>
                            <p style={{ marginBottom: '24px' }}>
                                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios (como los formularios de contacto)
                                y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>5. Contacto</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Para cualquier consulta sobre este aviso legal, puedes contactar con nosotros a través de:
                            </p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '8px' }}>Correo: info@aldeitas.com</li>
                                <li style={{ marginBottom: '8px' }}>Ubicación: Rosario, Santa Fe</li>
                            </ul>

                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '40px', borderTop: '1px solid var(--gray-light)', paddingTop: '20px' }}>
                                Última actualización: Abril 2024.
                            </p>
                        </div>

                        <div style={{ marginTop: '60px', textAlign: 'center' }}>
                            <Link to="/" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                Volver al inicio
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </main>
    )
}
