import { STEPS } from '../data'
import { useReveal } from '../hooks'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section id="how" ref={ref} className="relative overflow-hidden bg-sand-100 py-24">
      <div className="wood-grain-dark absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="كيف يعمل" title="ثلاث خطوات من التصفح إلى باب بيتك" />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* connecting line */}
          <div className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-sand-400/70 md:block" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className="reveal relative flex gap-5 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-sand-200 backdrop-blur md:flex-col md:items-center md:bg-transparent md:p-0 md:text-center md:shadow-none md:ring-0 md:backdrop-blur-none"
            >
              <div className="relative shrink-0">
                <span className="grid size-20 place-items-center rounded-[1.75rem] bg-forest-800 text-sand-200 shadow-lg shadow-forest-900/20 md:size-20">
                  <Icon name={s.icon} className="size-9" strokeWidth={1.6} />
                </span>
                <span className="absolute -top-2 -left-2 grid size-8 place-items-center rounded-full bg-ember-500 font-display text-sm font-bold text-white ring-4 ring-sand-100">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold md:mt-6">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-7 text-forest-950/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
