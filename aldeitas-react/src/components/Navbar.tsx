
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
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
    <nav
      id="navbar"
      className={scrolled ? 'scrolled' : ''}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" className="nav-logo" aria-label="Aldeitas Food — Inicio" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/logo-sin-fondo.png`}
            alt="Aldeitas Food Logo"
          />
          <span className="nav-brand-text" style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 800,
            fontSize: '1.4rem',
            lineHeight: 1.1,
            color: 'var(--green)',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column'
          }}>
            Aldeitas<span style={{ fontSize: '0.9rem', color: 'var(--gold)', letterSpacing: '0.15em' }}>Food</span>
          </span>
        </Link>

        {/* RIGHT: links + hamburger */}
        <div className="nav-right">
          <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu" role="list">
            <li><NavLink to="/viandas-corporativas" onClick={closeMenu}>Viandas</NavLink></li>
            <li><NavLink to="/congelados" onClick={closeMenu}>Congelados</NavLink></li>
            <li><NavLink to="/distribucion" onClick={closeMenu}>Distribución</NavLink></li>
            <li><NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
          </ul>

          <button
            className="nav-toggle"
            id="navToggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>

      </div>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="nav-mobile-overlay">
          <ul className="nav-mobile-links" role="list">
            <li><NavLink to="/viandas-corporativas" onClick={closeMenu}>Viandas</NavLink></li>
            <li><NavLink to="/congelados" onClick={closeMenu}>Congelados</NavLink></li>
            <li><NavLink to="/distribucion" onClick={closeMenu}>Distribución</NavLink></li>
            <li><NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
