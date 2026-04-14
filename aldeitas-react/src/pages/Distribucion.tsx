import { motion } from 'framer-motion'
import { ModalTrigger } from '@/components/ModalTrigger'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Distribucion() {
    return (
        <main className="distribucion-page" style={{ paddingTop: '120px' }}>
            {/* HERO SECTION */}
            <section style={{ padding: '60px 0', marginBottom: '80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.9rem' }}>Socios Logísticos</span>
                            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5.5vw, 4.2rem)', marginBottom: '32px' }}>
                                Distribución Mayorista<br /><em>Eficiente y Puntual.</em>
                            </h1>
                            <p className="section-sub" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                                Abastecemos a buffet, comedores, minimercados y empresas con nuestra
                                línea completa de productos. Calidad artesanal a escala industrial,
                                con la seriedad que tu negocio requiere.
                            </p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <ModalTrigger tipo="empresa" className="btn btn-primary">
                                    Solicitar Lista de Precios
                                </ModalTrigger>
                                <a href="#soluciones" className="btn btn-gold">Nuestras Soluciones</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: 'relative', height: '550px', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}assets/distribucion_hero.png`}
                                alt="Distribución Aldeitas"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SOLUCIONES SECTION */}
            <section id="soluciones" style={{ padding: '100px 0', background: 'var(--off-white)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <h2 className="section-title">Soluciones B2B</h2>
                        <p className="section-sub">Diseñamos modelos de abastecimiento a medida según el tamaño y rotación de tu punto de venta.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                        {[
                            {
                                title: 'Buffet y Comedores',
                                desc: 'Abastecimiento diario de viandas frescas listas para servir. Variedad de menú y control bromatológico estricto.',
                                icon: '🏢'
                            },
                            {
                                title: 'Retail y Tiendas',
                                desc: 'Línea de congelados IQF con packaging premium. Excelente rotación y márgenes competitivos para tu local.',
                                icon: '🛒'
                            },
                            {
                                title: 'Eventos Corporativos',
                                desc: 'Catering masivo y soluciones de lunch para eventos empresariales de cualquier magnitud.',
                                icon: '🎉'
                            },
                            {
                                title: 'Plataformas de Delivery',
                                desc: 'Somos tu partner de producción. Elaboramos marcas blancas o productos específicos para tu operación online.',
                                icon: '📱'
                            }
                        ].map((sol, idx) => (
                            <AnimateOnScroll key={idx} delay={idx * 0.1}>
                                <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '30px', display: 'flex', gap: '24px', alignItems: 'flex-start', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <div style={{ fontSize: '2.5rem', background: 'var(--green-light)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        {sol.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 800, marginBottom: '12px', fontSize: '1.4rem' }}>{sol.title}</h3>
                                        <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{sol.desc}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ background: 'var(--green)', borderRadius: '40px', padding: '100px 40px', textAlign: 'center', color: 'var(--white)' }}>
                        <h2 className="section-title" style={{ color: 'var(--white)', fontSize: '3rem' }}>Escalemos tu negocio juntos.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 48px' }}>
                            Dejanos tus datos y un ejecutivo de cuentas se pondrá en contacto para armar un plan comercial a tu medida.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <ModalTrigger tipo="empresa" className="btn btn-white">Contactar Ventas</ModalTrigger>
                            <a href="https://wa.me/yournumber" className="btn btn-outline-white">Chat por WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
