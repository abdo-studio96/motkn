import { useId } from 'react'

// Hand-drawn SVG product imagery, so the page renders fully offline.
// To use photos instead, give a product an `image` URL; see ProductImage below.

const WOOD_TONES = {
  'logs-acacia': { bark: '#5a3b24', barkHi: '#7a5233', wood: '#f0cf98', woodEdge: '#c8925a', ring: '#a8703c', bg: ['#f7eedc', '#e6cfa2'] },
  'logs-sidr': { bark: '#3b2416', barkHi: '#5b3a24', wood: '#c98a58', woodEdge: '#8c4f2b', ring: '#6e3a1e', bg: ['#f3e6cc', '#dcc093'] },
  'logs-olive': { bark: '#6b5236', barkHi: '#8a6c49', wood: '#f3dfb5', woodEdge: '#cfae74', ring: '#b18c52', bg: ['#f2efdf', '#dcd5ad'] },
}

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function Logs({ variant, uid }) {
  const t = WOOD_TONES[variant]
  const rand = seeded(variant.length * 97 + 13)
  const rows = [
    { y: 222, xs: [92, 164, 236, 308] },
    { y: 160, xs: [128, 200, 272] },
    { y: 98, xs: [164, 236] },
  ]
  return (
    <>
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.bg[0]} />
          <stop offset="1" stopColor={t.bg[1]} />
        </linearGradient>
        <radialGradient id={`${uid}wood`} cx="0.45" cy="0.42" r="0.6">
          <stop offset="0" stopColor={t.wood} />
          <stop offset="0.75" stopColor={t.wood} />
          <stop offset="1" stopColor={t.woodEdge} />
        </radialGradient>
        <radialGradient id={`${uid}bark`} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor={t.barkHi} />
          <stop offset="1" stopColor={t.bark} />
        </radialGradient>
        <radialGradient id={`${uid}light`} cx="0.3" cy="0.15" r="0.9">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${uid}bg)`} />
      <rect width="400" height="300" fill={`url(#${uid}light)`} />
      <ellipse cx="200" cy="262" rx="170" ry="16" fill="#3b2416" opacity="0.18" />
      {rows.map((row, ri) =>
        row.xs.map((x, i) => {
          const r = 36 + (rand() - 0.5) * 4
          const a = rand() * Math.PI * 2
          const cx = x + (rand() - 0.5) * 4
          const cy = row.y + (rand() - 0.5) * 3
          return (
            <g key={`${ri}-${i}`}>
              <circle cx={cx} cy={cy + 3} r={r} fill="#2e1d12" opacity="0.25" />
              <circle cx={cx} cy={cy} r={r} fill={`url(#${uid}bark)`} />
              <circle cx={cx} cy={cy} r={r - 6} fill={`url(#${uid}wood)`} />
              {[0.72, 0.5, 0.28].map((k) => (
                <circle
                  key={k}
                  cx={cx + (rand() - 0.5) * 2}
                  cy={cy + (rand() - 0.5) * 2}
                  r={(r - 6) * k}
                  fill="none"
                  stroke={t.ring}
                  strokeWidth="1.3"
                  opacity="0.55"
                />
              ))}
              <circle cx={cx} cy={cy} r="2.2" fill={t.ring} opacity="0.8" />
              <path
                d={`M${cx} ${cy} L${cx + Math.cos(a) * (r - 8)} ${cy + Math.sin(a) * (r - 8)}`}
                stroke={t.bark}
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.55"
              />
            </g>
          )
        }),
      )}
    </>
  )
}

function CharcoalLump({ uid }) {
  const rand = seeded(4242)
  const chunks = []
  // Mound shape: more pieces low, fewer at the top
  const layers = [
    { y: 232, n: 7, spread: 300, r: 30 },
    { y: 196, n: 6, spread: 240, r: 29 },
    { y: 160, n: 4, spread: 170, r: 28 },
    { y: 126, n: 3, spread: 100, r: 26 },
    { y: 96, n: 1, spread: 0, r: 24 },
  ]
  layers.forEach((l) => {
    for (let i = 0; i < l.n; i++) {
      const cx = 200 - l.spread / 2 + (l.n === 1 ? l.spread / 2 : (l.spread / (l.n - 1)) * i) + (rand() - 0.5) * 14
      const cy = l.y + (rand() - 0.5) * 10
      const pts = []
      const sides = 6 + Math.floor(rand() * 2)
      const rot = rand() * Math.PI
      for (let k = 0; k < sides; k++) {
        const ang = rot + (k / sides) * Math.PI * 2
        const rr = l.r * (0.72 + rand() * 0.4)
        pts.push([cx + Math.cos(ang) * rr * 1.15, cy + Math.sin(ang) * rr * 0.85])
      }
      chunks.push({ cx, cy, pts, shade: Math.floor(rand() * 3) })
    }
  })
  const shades = ['#3d3b39', '#2f2d2c', '#262423']
  return (
    <>
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2a1d" />
          <stop offset="1" stopColor="#140d08" />
        </linearGradient>
        <radialGradient id={`${uid}glow`} cx="0.5" cy="0.85" r="0.55">
          <stop offset="0" stopColor="#ee9a45" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ee9a45" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}hi`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a8580" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#8a8580" stopOpacity="0" />
        </linearGradient>
        <filter id={`${uid}blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <rect width="400" height="300" fill={`url(#${uid}bg)`} />
      <rect width="400" height="300" fill={`url(#${uid}glow)`} />
      <ellipse cx="200" cy="262" rx="175" ry="14" fill="#000" opacity="0.35" />
      {[[150, 214], [236, 200], [196, 238], [270, 236], [120, 240]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={10 + i} fill="#f2873a" opacity="0.7" filter={`url(#${uid}blur)`} />
      ))}
      {chunks.map((c, i) => {
        const d = c.pts.map((p, k) => `${k ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') + 'Z'
        return (
          <g key={i}>
            <path d={d} fill={shades[c.shade]} stroke="#141312" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={d} fill={`url(#${uid}hi)`} />
            <path
              d={`M${c.pts[3][0]} ${c.pts[3][1]} L${c.pts[4][0]} ${c.pts[4][1]} L${c.pts[5][0]} ${c.pts[5][1]}`}
              fill="none"
              stroke="#a39d96"
              strokeWidth="1"
              opacity="0.35"
            />
          </g>
        )
      })}
      {[[172, 226], [228, 212], [254, 244]].map(([x, y], i) => (
        <circle key={`e${i}`} cx={x} cy={y} r="2.4" fill="#ffc074" />
      ))}
    </>
  )
}

function Briquettes({ uid }) {
  const s = 40
  const w = s * 0.866
  const h = s / 2
  const cubes = []
  const layers = [
    { n: 3, cx: 200, cy: 150, z: 0 },
    { n: 2, cx: 200, cy: 150 + h, z: 1 },
  ]
  layers.forEach(({ n, cx, cy, z }) => {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        cubes.push({ x: cx + (i - j) * w, y: cy + (i + j) * h - z * s - (n - 1) * h, order: z * 100 + i + j })
  })
  cubes.sort((a, b) => a.order - b.order)
  return (
    <>
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5e9d0" />
          <stop offset="1" stopColor="#d7b680" />
        </linearGradient>
        <linearGradient id={`${uid}box`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99a5c" />
          <stop offset="1" stopColor="#a87a40" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${uid}bg)`} />
      {/* kraft box behind */}
      <rect x="250" y="70" width="120" height="150" rx="6" fill={`url(#${uid}box)`} opacity="0.9" />
      <rect x="250" y="70" width="120" height="16" rx="4" fill="#8f652f" opacity="0.6" />
      <rect x="272" y="120" width="76" height="44" rx="6" fill="#163f2b" />
      <text x="310" y="140" textAnchor="middle" fontSize="15" fontWeight="700" fill="#f6eddb" fontFamily="Noto Kufi Arabic, sans-serif">فحم</text>
      <text x="310" y="157" textAnchor="middle" fontSize="10" fill="#dfc592" fontFamily="IBM Plex Sans Arabic, sans-serif">أقراص · 5 كجم</text>
      <ellipse cx="190" cy="262" rx="150" ry="13" fill="#3b2416" opacity="0.22" />
      <g transform="translate(-20 40)">
        {cubes.map((c, k) => {
          const { x, y } = c
          return (
            <g key={k}>
              <path d={`M${x} ${y - h} L${x + w} ${y} L${x} ${y + h} L${x - w} ${y}Z`} fill="#55504b" />
              <path d={`M${x - w} ${y} L${x} ${y + h} L${x} ${y + h + s} L${x - w} ${y + s}Z`} fill="#2d2a28" />
              <path d={`M${x} ${y + h} L${x + w} ${y} L${x + w} ${y + s} L${x} ${y + h + s}Z`} fill="#1d1b1a" />
              <path d={`M${x - w} ${y} L${x} ${y - h} L${x + w} ${y}`} fill="none" stroke="#7d7771" strokeWidth="1" opacity="0.6" />
            </g>
          )
        })}
      </g>
    </>
  )
}

function IndustrialBags({ uid }) {
  const bag = (cx, top, key) => {
    const w = 112
    const hgt = 66
    const x = cx - w / 2
    return (
      <g key={key}>
        <path
          d={`M${x + 8} ${top + 4} Q${cx} ${top - 6} ${x + w - 8} ${top + 4} Q${x + w + 4} ${top + hgt / 2} ${x + w - 6} ${top + hgt} Q${cx} ${top + hgt + 6} ${x + 6} ${top + hgt} Q${x - 4} ${top + hgt / 2} ${x + 8} ${top + 4}Z`}
          fill={`url(#${uid}bag)`}
          stroke="#8a6630"
          strokeWidth="1.2"
        />
        <path d={`M${x + 12} ${top + 8} Q${cx} ${top} ${x + w - 12} ${top + 8}`} fill="none" stroke="#7a5629" strokeWidth="1.4" strokeDasharray="4 3" />
        <rect x={cx - 30} y={top + 18} width="60" height="34" rx="5" fill="#163f2b" />
        <text x={cx} y={top + 34} textAnchor="middle" fontSize="12" fontWeight="700" fill="#f6eddb" fontFamily="Noto Kufi Arabic, sans-serif">فحم</text>
        <text x={cx} y={top + 47} textAnchor="middle" fontSize="9" fill="#dfc592" fontFamily="IBM Plex Sans Arabic, sans-serif">20 كجم</text>
      </g>
    )
  }
  return (
    <>
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7eee4" />
          <stop offset="1" stopColor="#c9d6c4" />
        </linearGradient>
        <linearGradient id={`${uid}bag`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e2c48e" />
          <stop offset="1" stopColor="#c19a5c" />
        </linearGradient>
        <linearGradient id={`${uid}pallet`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2a96c" />
          <stop offset="1" stopColor="#a87a40" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${uid}bg)`} />
      {/* warehouse wall lines */}
      {[40, 80, 120].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#1d5039" strokeOpacity="0.07" strokeWidth="2" />
      ))}
      <ellipse cx="200" cy="262" rx="180" ry="12" fill="#10301f" opacity="0.2" />
      {/* pallet */}
      <rect x="34" y="206" width="332" height="10" rx="2" fill={`url(#${uid}pallet)`} />
      {[44, 190, 336].map((x) => (
        <rect key={x} x={x} y="216" width="20" height="22" fill="#9a6f35" />
      ))}
      <rect x="34" y="238" width="332" height="10" rx="2" fill={`url(#${uid}pallet)`} />
      {bag(90, 140, 'a')}
      {bag(200, 140, 'b')}
      {bag(310, 140, 'c')}
      {bag(145, 76, 'd')}
      {bag(255, 76, 'e')}
    </>
  )
}

export default function ProductArt({ variant = 'logs-acacia', className = '', title }) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={title}
    >
      {variant.startsWith('logs') && <Logs variant={variant} uid={uid} />}
      {variant === 'charcoal-lump' && <CharcoalLump uid={uid} />}
      {variant === 'charcoal-briquette' && <Briquettes uid={uid} />}
      {variant === 'industrial-bags' && <IndustrialBags uid={uid} />}
    </svg>
  )
}

export function ProductImage({ product, className = '' }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} loading="lazy" className={`object-cover ${className}`} />
  }
  return <ProductArt variant={product.art} title={product.name} className={className} />
}
