import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { useEffect } from 'react'

export default function Cookies() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main style={{ paddingTop: '120px', background: 'var(--off-white)', minHeight: '100vh' }}>
            <section style={{ padding: '60px 0 100px' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <AnimateOnScroll>
                        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Legal</span>
                        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Política de Cookies</h1>

                        <div className="legal-content" style={{ background: 'var(--white)', padding: '48px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow)' }}>
                            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text)' }}>
                                En <strong>Aldeitas Food</strong> utilizamos cookies para mejorar tu experiencia de navegación y entender cómo utilizas nuestro sitio.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>1. ¿Qué son las cookies?</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Una cookie es un pequeño archivo de texto que se descarga en tu dispositivo al visitar determinados sitios web.
                                Permiten a una web reconocer tu dispositivo y recordar información sobre tu visita.
                            </p>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>2. Cookies que utilizamos</h2>
                            <p style={{ marginBottom: '16px' }}>Este sitio utiliza los siguientes tipos de cookies:</p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '12px' }}>
                                    <strong>Cookies de sesión:</strong> Para garantizar que el sitio funcione correctamente durante tu visita (por ejemplo, para que el menú funcione bien).
                                </li>
                                <li style={{ marginBottom: '12px' }}>
                                    <strong>Cookies de análisis (Google Analytics):</strong> Nos ayudan a saber cuántas personas nos visitan y qué partes de la web les interesan más. Estos datos son anónimos.
                                </li>
                                <li style={{ marginBottom: '12px' }}>
                                    <strong>Cookies de preferencias:</strong> Recuerdan tus elecciones (si las hay) para la próxima vez que nos visites.
                                </li>
                            </ul>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>3. ¿Cómo desactivarlas?</h2>
                            <p style={{ marginBottom: '16px' }}>
                                Puedes restringir, bloquear o borrar las cookies en cualquier momento modificando la configuración de tu navegador:
                            </p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
                                <li style={{ marginBottom: '8px' }}>• Chrome: Configuración → Privacidad y seguridad.</li>
                                <li style={{ marginBottom: '8px' }}>• Firefox: Opciones → Privacidad y seguridad.</li>
                                <li style={{ marginBottom: '8px' }}>• Safari: Preferencias → Privacidad.</li>
                            </ul>

                            <h2 style={{ marginTop: '32px', marginBottom: '16px', color: 'var(--green)', fontSize: '1.5rem' }}>4. Consentimiento</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Al seguir navegando por nuestra web, entendemos que aceptas el uso de estas cookies para los fines mencionados.
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
