

interface ModalTriggerProps {
  tipo: 'empresa' | 'congelados'
  className?: string
  'aria-label'?: string
  children: React.ReactNode
}

export function ModalTrigger({ tipo, className, children, 'aria-label': ariaLabel }: ModalTriggerProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-modal', { detail: tipo }))
  }
  return (
    <button onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
