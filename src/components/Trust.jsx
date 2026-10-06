import { TRUST } from '../data'
import { useReveal } from '../hooks'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

const TRACK = ['تم التأكيد', 'قيد التجهيز', 'في الطريق', 'تم التسليم']

export default function Trust() {
  const ref = useReveal()
  return (
    <section id="trust" ref={ref} className="overflow-x-clip mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="start"
            eyebrow="الموثوقية والتتبع"
            title="اعرف من أين يأتي حطبك، ومن يورّده، وأين وصل طلبك"
            text="صُمّم السوق ليعطيك صورة واضحة قبل الشراء وبعده."
          />
          <ul className="mt-10 space-y-4">
            {TRUST.map((t, i) => (
              <li key={t.title} style={{ transitionDelay: `${i * 100}ms` }} className="reveal flex gap-4 rounded-2xl p-4 transition hover:bg-white hover:shadow-sm">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest-50 text-forest-700 ring-1 ring-forest-100">
                  <Icon name={t.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-forest-950/70">{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Demo tracking card */}
        <div className="reveal relative">
          <div className="absolute -inset-2 -z-10 rotate-2 sm:-inset-4 rounded-[2.5rem] bg-sand-200/60" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 p-6 text-sand-50 shadow-2xl sm:p-8">
            <div className="wood-grain absolute inset-0 opacity-[0.06]" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-sm text-sand-200/80">مثال توضيحي لتتبّع طلب</span>
                <span className="rounded-full bg-sand-300 px-2.5 py-0.5 text-[11px] font-bold text-forest-950">تجريبي</span>
              </div>
              <h3 className="mt-3 text-xl font-bold">طلب #DEMO-0001</h3>
              <p className="mt-1 text-sm text-sand-100/70">فحم طبيعي للشواء · كيس 10 كجم × 2</p>

              <ol className="mt-8 space-y-0">
                {TRACK.map((s, i) => {
                  const done = i < 2
                  const current = i === 2
                  return (
                    <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < TRACK.length - 1 && (
                        <span className={`absolute top-8 right-[15px] bottom-0 w-0.5 ${done ? 'bg-sand-300' : 'bg-white/15'}`} aria-hidden="true" />
                      )}
                      <span
                        className={`relative grid size-8 shrink-0 place-items-center rounded-full ${
                          done ? 'bg-sand-300 text-forest-950' : current ? 'bg-ember-500 text-white' : 'bg-white/10 text-sand-100/50'
                        }`}
                      >
                        {current && <span className="absolute inset-0 animate-ping rounded-full bg-ember-500/50" />}
                        <Icon name={done ? 'check' : current ? 'truck' : 'box'} className="relative size-4" strokeWidth={2.2} />
                      </span>
                      <div className="pt-1">
                        <p className={`font-semibold ${!done && !current ? 'text-sand-100/50' : ''}`}>{s}</p>
                        {current && <p className="mt-0.5 text-xs text-sand-200/70">سيتواصل المورد لتأكيد موعد التسليم</p>}
                      </div>
                    </li>
                  )
                })}
              </ol>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-sm">
                <div className="rounded-2xl bg-white/5 p-3.5">
                  <span className="flex items-center gap-1.5 text-sand-200/70"><Icon name="shield" className="size-4" /> المورد</span>
                  <p className="mt-1 font-semibold">شركة جذوة للتجارة</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3.5">
                  <span className="flex items-center gap-1.5 text-sand-200/70"><Icon name="leaf" className="size-4" /> المنشأ</span>
                  <p className="mt-1 font-semibold">موضّح على العبوة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
