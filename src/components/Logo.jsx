export default function Logo({ light = false, className = '' }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="سوق الحطب — الصفحة الرئيسية">
      <span className="relative grid size-10 place-items-center rounded-xl bg-forest-800 shadow-inner ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 40 40" className="size-7" aria-hidden="true">
          <path d="M20 5c2.6 5 8 7.6 8 14.2a8 8 0 0 1-16 0c0-3.9 2-6 4-8 0 2.6 1.3 4 2.8 4.3C17.6 11.4 18.8 8 20 5z" fill="#ee9a45" />
          <path d="M20 14c1 2.2 3.2 3.4 3.2 6.2a3.2 3.2 0 0 1-6.4 0c0-1.6.8-2.6 1.7-3.4.1 1 .6 1.6 1.2 1.7-.3-1.6 0-3 .3-4.5z" fill="#ffd08a" />
          <rect x="8" y="29" width="24" height="5" rx="2.5" fill="#cfa96a" />
          <circle cx="10.5" cy="31.5" r="1.4" fill="#9a6f35" />
          <circle cx="29.5" cy="31.5" r="1.4" fill="#9a6f35" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-extrabold ${light ? 'text-sand-50' : 'text-forest-900'}`}>سوق الحطب</span>
        <span className={`block text-[11px] font-medium tracking-wide ${light ? 'text-sand-300/80' : 'text-sand-600'}`} dir="ltr">Firewood Market</span>
      </span>
    </a>
  )
}
