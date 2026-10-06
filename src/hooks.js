import { useEffect, useRef } from 'react'

// Adds `.is-visible` to every `.reveal` element inside the ref when it scrolls into view.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.classList.contains('reveal') ? [root, ...root.querySelectorAll('.reveal')] : [...root.querySelectorAll('.reveal')]
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

// Ref-counted body scroll lock so the mobile menu and modals can't clobber each other.
let locks = 0
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return
    if (locks++ === 0) document.body.style.overflow = 'hidden'
    return () => {
      if (--locks === 0) document.body.style.overflow = ''
    }
  }, [active])
}
