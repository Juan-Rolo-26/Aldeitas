

import { useEffect, useRef, useState } from 'react'

type Tipo = 'empresa' | 'congelados'

export function ModalContacto() {
  const [isOpen, setIsOpen] = useState(false)
  const [tipo, setTipo] = useState<Tipo>('empresa')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Escucha el evento global disparado por ModalTrigger
  useEffect(() => {
    const handler = (e: Event) => {
      setTipo((e as CustomEvent<Tipo>).detail)
      setIsOpen(true)
      setSubmitted(false)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-modal', handler)
    return () => window.removeEventListener('open-modal', handler)
  }, [])

  // ESC cierra el modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const tipoLabel = tipo === 'empresa' ? 'Viandas corporativas' : 'Congelados / Distribución'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      empresa: (form.elements.namedItem('empresa') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
      tipo,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        throw new Error(json.error)
      }
    } catch {
      alert('Hubo un error. Por favor escribinos directo por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      ref={overlayRef}
      id="modalContacto"
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
    >
      <div className="modal-box">
        <button id="modalClose" className="modal-close" onClick={close} aria-label="Cerrar formulario">
          ✕
        </button>

        {!submitted ? (
          <div id="formContainer">
            <div className="modal-header">
              <h3 id="modalTitle">Contanos qué necesitás</h3>
              <p className="modal-sub">
                Tipo: <strong>{tipoLabel}</strong> — Te respondemos en menos de 24 hs.
              </p>
            </div>

            <div className="modal-body">
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="formNombre">Nombre *</label>
                    <input type="text" id="formNombre" name="nombre" placeholder="Tu nombre" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formEmpresa">Empresa</label>
                    <input type="text" id="formEmpresa" name="empresa" placeholder="Nombre de la empresa" autoComplete="organization" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="formEmail">Email *</label>
                    <input type="email" id="formEmail" name="email" placeholder="tu@email.com" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formTelefono">Teléfono</label>
                    <input type="tel" id="formTelefono" name="telefono" placeholder="Ej: 341 555 1234" autoComplete="tel" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="formMensaje">¿En qué te podemos ayudar? *</label>
                  <textarea
                    id="formMensaje"
                    name="mensaje"
                    placeholder="Contanos tu necesidad: cuánta gente, frecuencia, zona de entrega..."
                    required
                  />
                </div>

                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar consulta'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="form-success" role="status">
            <div className="check-icon" aria-hidden="true">✅</div>
            <h4>¡Gracias por escribirnos!</h4>
            <p>Recibimos tu consulta. Un integrante del equipo de Aldeitas te va a contactar en menos de 24 horas.</p>
          </div>
        )}
      </div>
    </div>
  )
}
