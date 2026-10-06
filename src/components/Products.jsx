import { CATEGORIES } from '../data'
import { useReveal } from '../hooks'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Products({ products, filters, setFilters, onOpen }) {
  const ref = useReveal()
  const tabs = [{ id: 'all', name: 'الكل' }, ...CATEGORIES]
  const filtered = filters.type !== 'all' || filters.city !== 'all'
  return (
    <section id="products" ref={ref} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading align="start" eyebrow="منتجات مختارة" title="منتجات مميزة من الموردين" text="جميع المنتجات والموردين والأسعار المعروضة بيانات تجريبية لأغراض العرض." />
      </div>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="تصفية حسب الفئة" className="inline-flex gap-1 rounded-full bg-sand-100 p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={filters.type === t.id}
                onClick={() => setFilters((f) => ({ ...f, type: t.id }))}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filters.type === t.id ? 'bg-forest-800 text-sand-50 shadow' : 'text-forest-900/70 hover:bg-white/70 hover:text-forest-900'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm" aria-live="polite">
          <span className="text-forest-950/70">
            <strong className="text-forest-900">{products.length}</strong> {products.length === 1 ? 'منتج' : 'منتجات'}
          </span>
          {filters.city !== 'all' && (
            <button
              type="button"
              onClick={() => setFilters((f) => ({ ...f, city: 'all' }))}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-forest-900 ring-1 ring-sand-200 transition hover:ring-forest-600"
            >
              <Icon name="pin" className="size-3.5 text-ember-500" />
              {filters.city}
              <Icon name="close" className="size-3.5 text-sand-600" />
              <span className="sr-only">إزالة تصفية المدينة</span>
            </button>
          )}
          {filtered && (
            <button type="button" onClick={() => setFilters({ type: 'all', city: 'all' })} className="font-semibold text-ember-500 underline-offset-4 hover:underline">
              إعادة الضبط
            </button>
          )}
        </div>
      </div>

      {products.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={`${p.id}-${filters.type}-${filters.city}`} product={p} city={filters.city} index={i} onOpen={onOpen} />
          ))}
        </div>
      ) : (
        <div className="mt-8 animate-pop rounded-3xl border-2 border-dashed border-sand-300 bg-sand-50 px-6 py-16 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-sand-600 shadow-sm">
            <Icon name="filter" className="size-7" />
          </span>
          <h3 className="mt-5 text-lg font-bold">لا توجد منتجات مطابقة</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-forest-950/65">
            لا تتوفر منتجات تجريبية من هذا النوع في {filters.city} حاليًا. جرّب مدينة أخرى أو اعرض جميع المنتجات.
          </p>
          <button type="button" onClick={() => setFilters({ type: 'all', city: 'all' })} className="mt-6 rounded-full bg-forest-800 px-6 py-3 text-sm font-bold text-sand-50 transition hover:bg-forest-700">
            عرض جميع المنتجات
          </button>
        </div>
      )}
    </section>
  )
}
