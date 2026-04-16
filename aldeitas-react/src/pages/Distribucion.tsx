import { motion } from 'framer-motion'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { Link } from 'react-router-dom'

const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || '5493413190087'
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || '#'

export default function Distribucion() {
    const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me interesa recibir información para ser distribuidor de Aldeitas.')}`

    return (
        <main className="distribucion-page" style={{ paddingTop: '120px' }}>
            {/* HERO SECTION */}
            <section style={{ padding: '60px 0', marginBottom: '80px' }}>
                <div className="container">
                    <div className="page-split-grid" style={{ gap: '60px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label" style={{ color: 'var(--green)' }}>Oportunidad de Negocio</span>
                            <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', marginBottom: '24px' }}>
                                Sumá productos que se <em>venden todos los días.</em>
                            </h1>
                            <p className="section-sub" style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text)' }}>
                                La línea de congelados Aldeitas pensada para distribuidores y comercios que buscan rotación, calidad y confianza.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-light)', borderLeft: '3px solid var(--gold)', paddingLeft: '24px' }}>
                                Productos que resuelven una necesidad real y vuelven a comprarse.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <ModalTrigger tipo="congelados" className="btn btn-primary" style={{ padding: '18px 36px' }}>
                                    Quiero ser distribuidor
                                </ModalTrigger>
                                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '18px 36px' }}>
                                    Solicitar información por WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative', height: '600px', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (20).jpg`}
                                alt="Distribución Aldeitas"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OPORTUNIDAD SECTION */}
            <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <span className="section-label" style={{ color: 'var(--gold)' }}>El Mercado</span>
                        <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '32px' }}>Una oportunidad simple: vender lo que la gente ya busca</h2>
                        <div style={{ fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: 1.8 }}>
                            <p style={{ marginBottom: '24px' }}>
                                Todos los días, miles de personas buscan resolver sus comidas de forma práctica.
                                Ahí es donde los productos congelados bien hechos tienen una ventaja clara.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--dark)' }}>
                                Cuando el producto es rico, abundante y confiable, no solo se vende… se vuelve a comprar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROPUESTA SECTION */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="page-split-grid" style={{ gap: '80px', alignItems: 'center' }}>
                        <AnimateOnScroll direction="left">
                            <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (53).jpg`}
                                    alt="Negocio Aldeitas"
                                    style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                                />
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll direction="right">
                            <div>
                                <span className="section-label">Nuestra Propuesta</span>
                                <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Un producto pensado como negocio</h2>
                                <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', marginBottom: '32px' }}>
                                    En Aldeitas desarrollamos una línea de productos congelados con un enfoque claro:
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                                    {['Que roten', 'Que gusten', 'Que el cliente vuelva'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <span style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 900 }}>✓</span>
                                            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--dark)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p style={{ fontSize: '1.1rem', color: 'var(--text)', background: 'var(--off-white)', padding: '24px', borderRadius: '20px', borderLeft: '4px solid var(--green)' }}>
                                    No es solo comida, es una línea pensada para funcionar en el punto de venta.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* PARA QUIÉN ES SECTION */}
            <section style={{ padding: '100px 0', background: 'var(--blue)', color: 'white' }}>
                <div className="container">
                    <div className="page-split-grid" style={{ gap: '80px', alignItems: 'center' }}>
                        <div>
                            <span className="section-label" style={{ color: 'var(--gold)' }}>Perfil de Socio</span>
                            <h2 className="section-title" style={{ color: 'white' }}>¿Quién puede trabajar con Aldeitas?</h2>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '32px' }}>
                                {['Distribuidores mayoristas', 'Supermercados', 'Almacenes', 'Comercios de cercanía'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>●</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '40px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
                                Si tenés un punto de venta o una red de distribución, podés sumar productos que realmente funcionen.
                            </p>
                        </div>
                        <div style={{ borderRadius: '32px', overflow: 'hidden', height: '400px' }}>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (11).jpg`}
                                alt="Comercios Aldeitas"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFERENCIALES SECTION */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <span className="section-label" style={{ color: 'var(--blue)' }}>Ventajas Competitivas</span>
                        <h2 className="section-title">Por qué elegir Aldeitas</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {[
                            { title: 'Producto que rota', desc: 'Pensado para el consumo real, no para quedar en freezer.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg> },
                            { title: 'Sabor casero real', desc: 'Calidad que el cliente reconoce y vuelve a elegir.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12s-4-5-4-8a4 4 0 1 1 8 0c0 3-4 8-4 8Z" /><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg> },
                            { title: 'Porciones abundantes', desc: 'Un diferencial claro frente a otras opciones.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v12" /><path d="M6 12h12" /></svg> },
                            { title: 'Línea simple', desc: 'Fácil de trabajar, sin complejidad operativa.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 12h6" /></svg> },
                            { title: 'Confianza en el servicio', desc: 'Cumplimiento en entregas y consistencia en el producto.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg> }
                        ].map((d, i) => (
                            <AnimateOnScroll key={i} delay={i * 0.1}>
                                <div style={{ background: 'var(--off-white)', padding: '48px 40px', borderRadius: '32px', height: '100%', border: '1px solid rgba(0,0,0,0.03)', position: 'relative' }} className="hover-lift">
                                    <div style={{ color: 'var(--gold)', marginBottom: '24px' }}>{d.icon}</div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px' }}>{d.title}</h3>
                                    <p style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: '1.05rem' }}>{d.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CÓMO EMPEZAR SECTION */}
            <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="text-center" style={{ marginBottom: '60px' }}>
                            <span className="section-label">Proceso Simple</span>
                            <h2 className="section-title">Empezar es simple</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
                            {[
                                { step: 'WhatsApp', desc: 'Nos escribís por WhatsApp', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg> },
                                { step: 'Catálogo', desc: 'Catálogo de productos y precios', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M8 7h6" /><path d="M8 11h8" /></svg> },
                                { step: 'Pedido', desc: 'Definís tu pedido según necesidad', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
                                { step: 'Logística', desc: 'Coordinamos entrega o retiro', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V2" /><path d="M10 13h4" /><path d="M10 9h4" /><path d="M21 2h-1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h1" /><path d="M3 2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3" /></svg> }
                            ].map((s, i) => (
                                <AnimateOnScroll key={i} delay={i * 0.1}>
                                    <div style={{ background: 'white', padding: '32px 24px', borderRadius: '24px', textAlign: 'center', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }} className="hover-lift">
                                        <div style={{ width: '56px', height: '56px', background: 'var(--green-light)', color: 'var(--green)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {s.icon}
                                        </div>
                                        <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{s.desc}</span>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>

                        <div className="text-center" style={{ marginTop: '60px' }}>
                            <p style={{ color: 'var(--green)', fontWeight: 800, fontSize: '1.5rem' }}>
                                Simple = más conversión
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BARRERAS SECTION */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div className="page-split-grid" style={{ gap: '80px', alignItems: 'center' }}>
                        <AnimateOnScroll direction="left">
                            <div style={{ borderRadius: '40px', overflow: 'hidden', height: '500px' }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (32).jpg`}
                                    alt="Preguntas Frecuentes Distribución"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll direction="right">
                            <div>
                                <span className="section-label" style={{ color: 'var(--blue)' }}>Transparencia</span>
                                <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Sabemos lo que estás evaluando</h2>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '32px 0' }}>
                                    {[
                                        'Si el producto realmente se vende',
                                        'La relación precio / margen',
                                        'La calidad',
                                        'La conservación'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 600, color: 'var(--dark)' }}>
                                            <span style={{ color: 'var(--green)', fontSize: '1.4rem' }}>●</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    Por eso desarrollamos productos simples, confiables y pensados para el consumo real.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* CIERRE SECTION */}
            <section style={{ padding: '140px 0', background: 'var(--green)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ color: 'white', fontSize: '3.5rem', marginBottom: '32px' }}>
                            Si querés sumar productos que funcionen como negocio, tenemos que hablar
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <ModalTrigger tipo="congelados" className="btn btn-white" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                                Quiero ser distribuidor
                            </ModalTrigger>
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                                Solicitar información por WhatsApp
                            </a>
                        </div>
                        <div style={{ marginTop: '60px' }}>
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '1.2rem', opacity: 0.8 }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Seguinos en Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRUCE INTELIGENTE */}
            <section style={{ padding: '60px 0', borderTop: '1px solid #eee' }}>
                <div className="container text-center">
                    <Link to="/congelados" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                        Conocé la línea completa de productos
                        <span style={{ fontSize: '1.5rem' }}>→</span>
                    </Link>
                </div>
            </section>
        </main>
    )
}
