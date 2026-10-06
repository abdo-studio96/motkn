import { CATEGORIES, formatPrice } from '../data'
import { ProductImage } from './ProductArt'
import Icon from './Icon'

export const categoryName = (id) => CATEGORIES.find((c) => c.id === id)?.name

export function DemoBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-sand-100 px-2.5 py-0.5 text-[11px] font-bold text-sand-700 ring-1 ring-sand-300/60 ${className}`}>
      تجريبي
    </span>
  )
}

export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-forest-50 px-2 py-0.5 text-[11px] font-semibold text-forest-700 ring-1 ring-forest-100" title="شارة تحقق تجريبية">
      <Icon name="shield" className="size-3.5" />
      موثّق · تجريبي
    </span>
  )
}

export default function ProductCard({ product, city, onOpen, index }) {
  const shownCity = city !== 'all' && product.cities.includes(city) ? city : product.cities[0]
  const extra = product.cities.length - 1
  return (
    <article style={{ animationDelay: `${index * 60}ms` }} className="animate-pop">
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`معاينة ${product.name}`}
        className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-start shadow-sm ring-1 ring-sand-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/10"
      >
        <div className="relative overflow-hidden">
          <ProductImage product={product} className="block aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <span className="rounded-full bg-forest-950/70 px-3 py-1 text-xs font-semibold text-sand-50 backdrop-blur">{categoryName(product.category)}</span>
            <DemoBadge className="bg-white/90" />
          </div>
          <span className="absolute bottom-3 left-3 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-forest-900 opacity-0 shadow transition group-hover:translate-y-0 group-hover:opacity-100">
            معاينة سريعة
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold text-forest-950">{product.name}</h3>
          <div className="mt-2 mb-4 flex flex-wrap items-center gap-2 text-sm text-forest-950/70">
            <Icon name="store" className="size-4 text-sand-600" />
            <span>{product.supplier}</span>
            <VerifiedBadge />
          </div>
          <div className="mt-auto flex items-end justify-between gap-3 border-t border-dashed border-sand-200 pt-4">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl font-extrabold text-forest-800">{formatPrice(product.price)}</span>
                <span className="text-sm font-semibold text-forest-800">ر.س</span>
              </div>
              <span className="text-xs text-sand-600">/ {product.unit}</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-sand-50 px-2.5 py-1 text-xs font-medium text-forest-950/75 ring-1 ring-sand-200">
              <Icon name="pin" className="size-3.5 text-ember-500" />
              {shownCity}
              {extra > 0 && <span className="text-sand-600">+{extra}</span>}
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}
