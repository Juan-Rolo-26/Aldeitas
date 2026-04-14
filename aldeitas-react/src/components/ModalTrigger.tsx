

interface ModalTriggerProps {
  tipo: 'empresa' | 'congelados'
  className?: string
  style?: React.CSSProperties
  'aria-label'?: string
  children: React.ReactNode
}

export function ModalTrigger({ tipo, className, style, children, 'aria-label': ariaLabel }: ModalTriggerProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-modal', { detail: tipo }))
  }
  return (
    <button onClick={handleClick} className={className} style={style} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
