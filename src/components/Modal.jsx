import { useEffect, useRef } from 'react'
import Icon from './Icon'
import { useScrollLock } from '../hooks'

export default function Modal({ open, onClose, labelledBy, children, size = 'max-w-3xl' }) {
  const panelRef = useRef(null)
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement

    const focusables = () =>
      panelRef.current?.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []
    requestAnimationFrame(() => (focusables()[0] ?? panelRef.current)?.focus())

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const els = [...focusables()]
        if (!els.length) return
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 animate-fade bg-forest-950/60 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative max-h-[92dvh] w-full ${size} animate-pop overflow-y-auto rounded-t-3xl bg-paper shadow-2xl ring-1 ring-black/5 sm:rounded-3xl`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute top-3 left-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-forest-900 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:rotate-90"
        >
          <Icon name="close" />
        </button>
        {children}
      </div>
    </div>
  )
}
