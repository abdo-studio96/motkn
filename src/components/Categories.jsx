import { CATEGORIES, PRODUCTS } from '../data'
import { useReveal } from '../hooks'
import { ProductImage } from './ProductImage'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Categories({ activeType, onSelect }) {
  const ref = useReveal()
  return (
    <section id="categories" ref={ref} className="mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="الفئات" title="ماذا تبحث عنه اليوم؟" text="اختر الفئة لعرض منتجاتها مباشرة في قائمة المنتجات." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {CATEGORIES.map((c, i) => {
          const count = PRODUCTS.filter((p) => p.category === c.id).length
          const active = activeType === c.id
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect(c.id)}
              aria-pressed={active}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`reveal group relative overflow-hidden rounded-3xl bg-white text-start shadow-sm ring-1 transition-[box-shadow,transform,opacity] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/10 ${
                active ? 'ring-2 ring-forest-600' : 'ring-sand-200'
              }`}
            >
              <div className="relative overflow-hidden">
                <ProductImage product={c} className="block aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-105" />
                {active && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-forest-700 px-3 py-1 text-xs font-bold text-white">
                    <Icon name="check" className="size-3.5" strokeWidth={2.5} /> محدد
                  </span>
                )}
              </div>
              <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-xl font-bold text-forest-950">{c.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-forest-950/65">{c.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-sand-600">{count} {count === 1 ? 'منتج' : 'منتجات'} تجريبية</span>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sand-100 text-forest-800 transition group-hover:bg-forest-800 group-hover:text-sand-50">
                  <Icon name="arrow" className="size-5 transition-transform group-hover:-translate-x-0.5" />
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
