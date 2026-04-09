

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { ModalTrigger } from './ModalTrigger'

export function Navbar() {
  // Navbar always has white background
  const [scrolled, setScrolled] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Always keep scrolled = true so white bg is always applied
    setScrolled(true)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Navegación principal">
      <div className="container">
        <div className="nav-inner">

          <Link to="/" className="nav-logo" aria-label="Aldeitas Food - Inicio">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-sin-fondo.png`}
              alt="Aldeitas Food - Cocina de familia, todos los días"
              width={120}
              height={46}

            />
          </Link>

          <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu" role="list">
            <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
            <li><Link to="/viandas-corporativas" onClick={closeMenu}>Viandas</Link></li>
            <li><Link to="/congelados" onClick={closeMenu}>Congelados</Link></li>
            <li><Link to="/distribucion" onClick={closeMenu}>Distribución</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          </ul>

          <div className="nav-cta">
            <ModalTrigger tipo="empresa" className="btn btn-gold" aria-label="Solicitar propuesta de viandas corporativas">
              Consultar propuesta
            </ModalTrigger>
          </div>

          <button
            className="nav-toggle"
            id="navToggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </nav>
  )
}
