import { useReveal } from '../hooks'
import Icon from './Icon'
import { ProductImage } from './ProductArt'
import { PHOTOS } from '../data'

const PERKS = [
  { icon: 'users', title: 'وصول لمشترين جدد', text: 'اعرض منتجاتك للأفراد والمنشآت في المدن التي تخدمها.' },
  { icon: 'store', title: 'صفحة مورد خاصة بك', text: 'منتجاتك وأسعارك ووحدات البيع ومدن التوصيل في مكان واحد.' },
  { icon: 'chart', title: 'إدارة الطلبات', text: 'استقبل الطلبات وحدّث حالتها ليتابعها العميل أولًا بأول.' },
]

export default function SupplierCTA({ onBecomeSupplier }) {
  const ref = useReveal()
  return (
    <section id="suppliers" ref={ref} className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest-800 text-sand-50">
        <div className="wood-grain absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-ember-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-sand-200">
              <Icon name="store" className="size-4" /> للموردين
            </span>
            <h2 className="mt-5 text-3xl leading-snug font-extrabold text-balance sm:text-4xl">هل تورّد الحطب أو الفحم؟ اعرض منتجاتك في سوق الحطب</h2>
            <p className="mt-4 max-w-xl leading-8 text-sand-100/75">
              سجّل اهتمامك الآن لتكون من أوائل الموردين عند الإطلاق. التسجيل مجاني وغير ملزم.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {PERKS.map((p) => (
                <li key={p.title} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <Icon name={p.icon} className="size-6 text-sand-300" />
                  <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                  <p className="mt-1 text-xs leading-6 text-sand-100/65">{p.text}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onBecomeSupplier}
              className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sand-300 px-8 py-4 font-bold text-forest-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-sand-200 sm:w-auto"
            >
              انضم كمورد
              <Icon name="arrow" className="size-5 transition-transform group-hover:-translate-x-1" />
            </button>
          </div>
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <ProductImage product={{ name: 'حطب', art: 'logs-sidr', image: PHOTOS.sidr }} className="block aspect-square w-full rounded-3xl shadow-xl overflow-hidden" />
                <ProductImage product={{ name: 'فحم أقراص', art: 'charcoal-briquette', image: PHOTOS.briquettes }} className="block aspect-[4/3] w-full rounded-3xl shadow-xl overflow-hidden" />
              </div>
              <div className="space-y-4">
                <ProductImage product={{ name: 'فحم صناعي', art: 'industrial-bags', image: PHOTOS.industrial }} className="block aspect-[4/3] w-full rounded-3xl shadow-xl overflow-hidden" />
                <ProductImage product={{ name: 'حطب', art: 'logs-olive', image: PHOTOS.acacia }} className="block aspect-square w-full rounded-3xl shadow-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
