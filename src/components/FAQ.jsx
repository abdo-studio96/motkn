import { useState } from 'react'
import { FAQS } from '../data'
import { useReveal } from '../hooks'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function FAQ() {
  const ref = useReveal()
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" ref={ref} className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="الأسئلة الشائعة" title="لديك سؤال؟" />
      <div className="reveal mt-10 divide-y divide-sand-200 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q}>
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start font-sans text-base font-bold transition hover:bg-sand-50 sm:px-7"
                >
                  {f.q}
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full transition ${isOpen ? 'rotate-180 bg-forest-800 text-sand-50' : 'bg-sand-100 text-forest-800'}`}>
                    <Icon name="chevron" className="size-4" />
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-8 text-forest-950/70 sm:px-7">{f.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
