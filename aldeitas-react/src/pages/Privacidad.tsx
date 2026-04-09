import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { useEffect } from 'react'

export default function Privacidad() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main style={{ paddingTop: '120px', background: 'var(--off-white)', minHeight: '100vh' }}>
            <section style={{ padding: '60px 0 100px' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <AnimateOnScroll>
                        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Legal</span>
                        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Política de Privacidad</h1>

                        <div className="legal-content" style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)' }}>
                            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text)' }}>
                                En <strong>Aldeitas Food</strong>, valoramos la confianza que depositas en nosotros al compartir tus datos. Esta política detalla cómo protegemos tu información.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>1. Información que recolectamos</h2>
                            <p style={{ marginBottom: '16px' }}> Recolectamos información necesaria para brindar nuestros servicios, incluyendo:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '8px' }}>Nombre y apellido o razón social.</li>
                                <li style={{ marginBottom: '8px' }}>Dirección de correo electrónico y teléfono de contacto.</li>
                                <li style={{ marginBottom: '8px' }}>Datos de facturación y entrega para servicios de viandas.</li>
                                <li style={{ marginBottom: '8px' }}>Información sobre preferencias alimenticias o restricciones (en el caso de viandas personalizadas).</li>
                            </ul>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>2. Uso de la información</h2>
                            <p style={{ marginBottom: '16px' }}>Tus datos se utilizan exclusivamente para:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '8px' }}>Procesar y entregar tus pedidos de viandas y congelados.</li>
                                <li style={{ marginBottom: '8px' }}>Enviarte cotizaciones personalizadas solicitadas.</li>
                                <li style={{ marginBottom: '8px' }}>Comunicarnos preventivamente sobre cambios en los menús o logística de entrega.</li>
                                <li style={{ marginBottom: '8px' }}>Mejorar continuamente nuestra oferta gastronómica basa en el feedback recibido.</li>
                            </ul>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>3. Protección de datos</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado,
                                la alteración o la destrucción. Aldeitas Food no vende ni alquila tu información personal a terceros.
                                Solo compartiremos datos cuando sea estrictamente necesario para la logística de entrega con socios de confianza.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>4. Tus derechos</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Tienes derecho a acceder, rectificar o eliminar tus datos personales de nuestra base en cualquier momento.
                                Para ejercer estos derechos, podés escribirnos a <strong>info@aldeitas.com</strong> mencionando en el asunto "Privacidad de Datos".
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>5. Actualizaciones</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Podemos actualizar esta política para reflejar cambios en nuestras prácticas. Te recomendamos revisar esta página periódicamente.
                            </p>
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
