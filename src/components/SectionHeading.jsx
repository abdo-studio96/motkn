export default function SectionHeading({ eyebrow, title, text, light = false, align = 'center' }) {
  return (
    <div className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className={`inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-sand-300' : 'text-ember-500'}`}>
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </span>
      <h2 className={`mt-3 text-[1.75rem] leading-snug font-extrabold text-balance sm:text-4xl ${light ? 'text-sand-50' : 'text-forest-950'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-8 ${light ? 'text-sand-100/75' : 'text-forest-950/65'}`}>{text}</p>}
    </div>
  )
}
