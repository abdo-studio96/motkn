const PATHS = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  cart: <><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2" /><circle cx="10" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></>,
  truck: <><path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17.5" cy="17.5" r="1.8" /></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z" /><path d="m8.8 12 2.2 2.2 4.4-4.4" /></>,
  leaf: <><path d="M5 19c0-8 5-13 15-14-.5 9.5-6 15-14 15" /><path d="M5 19c3-4 6-6.5 10-9" /></>,
  route: <><circle cx="6" cy="18" r="2.2" /><circle cx="18" cy="6" r="2.2" /><path d="M8.2 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.8" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  store: <><path d="M4 9.5 5.5 4h13L20 9.5M4 9.5V20h16V9.5M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" /><path d="M10 20v-5h4v5" /></>,
  box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <path d="M19 12H5m6-6-6 6 6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  phone: <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></>,
  flame: <path d="M12 3c1.5 3.5 5.5 5.5 5.5 10.5a5.5 5.5 0 0 1-11 0c0-2.8 1.5-4.4 3-5.8 0 1.8.9 2.9 2 3.1-.8-2.8 0-5.4.5-7.8z" />,
  filter: <path d="M4 5h16l-6 7.5V19l-4 1.5v-8z" />,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  chart: <><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M16.5 14.5c2.4.2 4 1.9 4.5 4.5" /></>,
}

export default function Icon({ name, className = 'size-5', strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
