import { CATEGORIES, CITIES } from '../data'
import Icon from './Icon'

function Field({ id, label, icon, value, onChange, children }) {
  return (
    <label htmlFor={id} className="group relative flex flex-1 cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sand-50 focus-within:bg-sand-50">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700">
        <Icon name={icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium text-sand-600">{label}</span>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none bg-transparent pe-6 text-base font-semibold text-forest-950 outline-none"
        >
          {children}
        </select>
      </span>
      <Icon name="chevron" className="pointer-events-none absolute left-4 size-4 text-sand-600" />
    </label>
  )
}

export default function SearchBar({ filters, setFilters }) {
  const onSubmit = (e) => {
    e.preventDefault()
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-5xl px-4 sm:px-6 lg:-mt-24">
      <form
        onSubmit={onSubmit}
        role="search"
        aria-label="البحث عن المنتجات"
        className="animate-fade-up rounded-3xl bg-white p-2.5 shadow-2xl shadow-forest-950/15 ring-1 ring-sand-200 [animation-delay:250ms]"
      >
        <div className="flex flex-col gap-1 md:flex-row md:items-center">
          <Field id="f-type" label="نوع المنتج" icon="flame" value={filters.type} onChange={(type) => setFilters((f) => ({ ...f, type }))}>
            <option value="all">جميع الأنواع</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </Field>
          <span className="mx-4 h-px bg-sand-200 md:mx-0 md:h-10 md:w-px" aria-hidden="true" />
          <Field id="f-city" label="مدينة التوصيل" icon="pin" value={filters.city} onChange={(city) => setFilters((f) => ({ ...f, city }))}>
            <option value="all">جميع المدن</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Field>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-800 px-8 py-4 text-base font-bold text-sand-50 transition hover:bg-forest-700 md:mt-0 md:ms-1"
          >
            <Icon name="search" />
            ابحث
          </button>
        </div>
      </form>
      <p className="mt-3 text-center text-xs text-sand-600">تتحدّث النتائج فورًا عند تغيير النوع أو المدينة.</p>
    </div>
  )
}
