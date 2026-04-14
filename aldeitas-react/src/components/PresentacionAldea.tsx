
import { Link } from 'react-router-dom'
import { AnimateOnScroll } from './AnimateOnScroll'

export function PresentacionAldea() {
    return (
        <section id="presentacion-aldea" aria-labelledby="presentacion-title">
            <div className="presentacion-grid">

                {/* Columna imagen */}
                <div className="presentacion-img-col">
                    <img
                        className="presentacion-img"
                        src={`${import.meta.env.BASE_URL}assets/La Aldea - Alta (36).jpg`}
                        alt="Cocina de Aldeitas Food — manos cocinando, equipo trabajando"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        loading="lazy"
                    />
                    <div className="presentacion-img-overlay" />
                </div>

                {/* Columna contenido */}
                <AnimateOnScroll className="presentacion-content">
                    <h2 id="presentacion-title" className="presentacion-title">
                        Cocina de familia, todos los días.
                    </h2>

                    <div className="pres-divider" />

                    <p className="presentacion-sub">
                        Viandas corporativas y productos congelados pensados para empresas, familias y negocios.
                    </p>

                    <div className="pres-divider" />

                    <div className="presentacion-actions">
                        <Link
                            to="/viandas-corporativas"
                            className="btn btn-primary"
                        >
                            Quiero una solución para mi empresa
                        </Link>
                        <Link
                            to="/congelados"
                            className="btn btn-outline-green"
                        >
                            Ver productos congelados
                        </Link>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    )
}
