import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'
import { useScrollLock } from '../hooks'

export const NAV = [
  { href: '#categories', label: 'الفئات' },
  { href: '#products', label: 'المنتجات' },
  { href: '#how', label: 'كيف يعمل' },
  { href: '#trust', label: 'الموثوقية' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
]

export default function Header({ onBecomeSupplier }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useScrollLock(menuOpen)

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-forest-950/90 shadow-lg shadow-forest-950/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo light />

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === n.href ? 'text-sand-200' : 'text-sand-50/80 hover:text-white'
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-ember-400 transition-transform duration-300 ${
                      active === n.href ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-sand-50 ring-1 ring-sand-50/25 transition hover:bg-white/10 sm:inline-flex"
          >
            تصفّح المنتجات
          </a>
          <button
            type="button"
            onClick={onBecomeSupplier}
            className="hidden rounded-full bg-sand-300 px-4 py-2.5 text-sm font-bold text-forest-950 shadow-sm transition hover:bg-sand-200 sm:inline-flex"
          >
            انضم كمورد
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="grid size-11 place-items-center rounded-full text-sand-50 ring-1 ring-sand-50/25 transition hover:bg-white/10 lg:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? 'max-h-[calc(100dvh-4.5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="قائمة الجوال" className="border-t border-white/10 px-4 pt-3 pb-6">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-sand-50 transition hover:bg-white/5"
                >
                  {n.label}
                  <Icon name="arrow" className="size-4 text-sand-300/60" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-sand-50 ring-1 ring-sand-50/25"
            >
              تصفّح المنتجات
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onBecomeSupplier()
              }}
              className="rounded-xl bg-sand-300 px-4 py-3 text-sm font-bold text-forest-950"
            >
              انضم كمورد
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
