import { useEffect, useState } from 'react'
import { formatPrice } from '../data'
import Modal from './Modal'
import Icon from './Icon'
import { ProductImage } from './ProductImage'
import { DemoBadge, VerifiedBadge, categoryName } from './ProductCard'

export default function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1)
  const [notice, setNotice] = useState(false)
  useEffect(() => {
    setQty(1)
    setNotice(false)
  }, [product])

  return (
    <Modal open={!!product} onClose={onClose} labelledBy="product-title">
      {product && (
        <div className="grid md:grid-cols-[1fr_1.1fr]">
          <div className="relative bg-sand-100">
            <ProductImage product={product} className="block aspect-[4/3] h-full w-full md:aspect-auto md:min-h-full" />
            <DemoBadge className="absolute top-3 right-3 bg-white/90" />
          </div>
          <div className="p-6 sm:p-8">
            <span className="text-xs font-bold text-ember-500">{categoryName(product.category)}</span>
            <h2 id="product-title" className="mt-1 text-2xl font-extrabold text-forest-950">{product.name}</h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-forest-950/70">
              <Icon name="store" className="size-4 text-sand-600" />
              {product.supplier}
              <VerifiedBadge />
            </div>
            <p className="mt-4 text-sm leading-7 text-forest-950/75">{product.description}</p>

            <div className="mt-5 flex items-baseline gap-1.5 rounded-2xl bg-forest-50 px-4 py-3">
              <span className="font-display text-3xl font-extrabold text-forest-800">{formatPrice(product.price)}</span>
              <span className="font-semibold text-forest-800">ر.س</span>
              <span className="text-sm text-forest-950/60">/ {product.unit}</span>
            </div>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="flex w-28 shrink-0 items-center gap-1.5 text-sand-600"><Icon name="leaf" className="size-4" /> المنشأ</dt>
                <dd className="font-medium">{product.origin}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="flex w-28 shrink-0 items-center gap-1.5 text-sand-600"><Icon name="pin" className="size-4" /> التوصيل إلى</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {product.cities.map((c) => (
                    <span key={c} className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-medium">{c}</span>
                  ))}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="flex w-28 shrink-0 items-center gap-1.5 text-sand-600"><Icon name="box" className="size-4" /> المواصفات</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {product.specs.map((s) => (
                    <span key={s} className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium ring-1 ring-sand-200">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center rounded-full bg-white ring-1 ring-sand-200">
                <button type="button" aria-label="زيادة الكمية" onClick={() => setQty((q) => Math.min(99, q + 1))} className="grid size-11 place-items-center rounded-full text-xl font-bold text-forest-800 hover:bg-sand-50">+</button>
                <span className="w-8 text-center font-bold" aria-live="polite">{qty}</span>
                <button type="button" aria-label="إنقاص الكمية" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid size-11 place-items-center rounded-full text-xl font-bold text-forest-800 hover:bg-sand-50">−</button>
              </div>
              <button
                type="button"
                onClick={() => setNotice(true)}
                className="flex-1 rounded-full bg-forest-800 px-6 py-3 font-bold text-sand-50 transition hover:bg-forest-700"
              >
                اطلب الآن
              </button>
            </div>
            <p className="mt-2 text-xs text-forest-950/55">
              الإجمالي التقديري: {formatPrice(product.price * qty)} ر.س (بيانات تجريبية)
            </p>
            {notice && (
              <p role="status" className="mt-4 animate-pop rounded-2xl bg-sand-100 px-4 py-3 text-sm leading-7 text-sand-700 ring-1 ring-sand-300/60">
                هذه نسخة تجريبية للواجهة فقط — الطلب والدفع غير متاحين حاليًا.
              </p>
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}
