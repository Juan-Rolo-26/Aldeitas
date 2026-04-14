
import { Link } from 'react-router-dom'

const WA = import.meta.env.VITE_WA_NUMBER ?? '549XXXXXXXXXX'

export function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div style={{ width: '100%', padding: '0 5%' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-sin-fondo.png`}
              className="footer-logo"
              alt="Aldeitas Food"
              width={160}
              height={58}
              loading="lazy"
            />
            <p>
              Transformamos la comida de todos los días en soluciones reales para empresas y familias. Viandas corporativas y congelados desde Rosario.
            </p>
            <div className="footer-social" aria-label="Redes sociales">
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.999 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="footer-col">
            <h4>NAVEGACION</h4>
            <nav className="footer-nav" aria-label="Navegación footer">
              <Link to="/">Inicio</Link>
              <Link to="/viandas-corporativas">Servicios</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>

          {/* Servicios Clave */}
          <div className="footer-col">
            <h4>SERVICIOS CLAVE</h4>
            <nav className="footer-nav" aria-label="Servicios clave">
              <Link to="/viandas-corporativas">Viandas corporativas</Link>
              <Link to="/congelados">Productos congelados</Link>
              <Link to="/distribucion">Distribución de productos</Link>
              <Link to="/contacto">Catering a medida</Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4>CONTACTO</h4>
            <address style={{ fontStyle: 'normal' }}>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span>Rosario - Santa Fe, Argentina</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span>WhatsApp: {WA}</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span>Mail: info@aldeitas.com</span>
              </div>
            </address>
          </div>

        </div>

        <div className="footer-bottom">
          <p>ALDEITAS © {new Date().getFullYear()} - Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/privacidad" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Privacidad</Link>
            <Link to="/legal" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Aviso Legal</Link>
            <Link to="/cookies" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
