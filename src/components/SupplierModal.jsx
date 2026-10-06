import { useEffect, useState } from 'react'
import { CATEGORIES, CITIES } from '../data'
import Modal from './Modal'
import Icon from './Icon'

const EMPTY = { name: '', company: '', phone: '', email: '', city: '', types: [], notes: '' }

const inputCls =
  'w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-forest-950 ring-1 ring-sand-200 transition placeholder:text-forest-950/35 focus:ring-2 focus:ring-forest-600 focus:outline-none aria-[invalid=true]:ring-red-400'

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'يرجى إدخال الاسم'
  if (v.company.trim().length < 2) e.company = 'يرجى إدخال اسم المنشأة'
  if (!/^(05\d{8}|\+?9665\d{8})$/.test(v.phone.replace(/\s/g, ''))) e.phone = 'أدخل رقم جوال سعودي صحيح، مثل 05XXXXXXXX'
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'البريد الإلكتروني غير صحيح'
  if (!v.city) e.city = 'اختر المدينة'
  if (!v.types.length) e.types = 'اختر نوعًا واحدًا على الأقل'
  return e
}

function Field({ label, error, optional, children, id }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-forest-950">
        {label} {optional && <span className="font-normal text-forest-950/45">(اختياري)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  )
}

export default function SupplierModal({ open, onClose }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done

  useEffect(() => {
    if (open) {
      setValues(EMPTY)
      setErrors({})
      setStatus('idle')
    }
  }, [open])

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const toggleType = (id) =>
    setValues((v) => ({ ...v, types: v.types.includes(id) ? v.types.filter((t) => t !== id) : [...v.types, id] }))

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      e.currentTarget.querySelector('[aria-invalid="true"]')?.focus()
      return
    }
    setStatus('sending')
    // Demo only: nothing is sent anywhere.
    setTimeout(() => setStatus('done'), 700)
  }

  const err = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `s-${k}-err` : undefined })

  return (
    <Modal open={open} onClose={onClose} labelledBy="supplier-title" size="max-w-2xl">
      {status === 'done' ? (
        <div className="px-6 py-14 text-center sm:px-12" role="status">
          <span className="mx-auto grid size-20 animate-pop place-items-center rounded-full bg-forest-100 text-forest-700">
            <Icon name="check" className="size-10" strokeWidth={2.4} />
          </span>
          <h2 id="supplier-title" className="mt-6 text-2xl font-extrabold">شكرًا {values.name.split(' ')[0]}، تم استلام اهتمامك</h2>
          <p className="mx-auto mt-3 max-w-md leading-8 text-forest-950/70">
            سنتواصل مع {values.company} عند إطلاق المنصة لاستكمال خطوات التسجيل والتحقق.
          </p>
          <p className="mx-auto mt-5 max-w-md rounded-2xl bg-sand-100 px-4 py-3 text-sm text-sand-700 ring-1 ring-sand-300/60">
            رسالة تأكيد تجريبية — لم يتم إرسال أو حفظ أي بيانات.
          </p>
          <button type="button" onClick={onClose} className="mt-8 rounded-full bg-forest-800 px-8 py-3 font-bold text-sand-50 transition hover:bg-forest-700">
            تم
          </button>
        </div>
      ) : (
        <>
          <div className="relative overflow-hidden bg-forest-800 px-6 pt-8 pb-7 text-sand-50 sm:px-8">
            <div className="wood-grain absolute inset-0 opacity-[0.08]" aria-hidden="true" />
            <div className="relative">
              <span className="rounded-full bg-sand-300 px-2.5 py-0.5 text-[11px] font-bold text-forest-950">نموذج تجريبي</span>
              <h2 id="supplier-title" className="mt-3 text-2xl font-extrabold">انضم كمورد</h2>
              <p className="mt-2 text-sm leading-7 text-sand-100/75">أخبرنا عن منشأتك ومنتجاتك، وسنتواصل معك عند الإطلاق.</p>
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="s-name" label="الاسم" error={errors.name}>
                <input id="s-name" className={inputCls} value={values.name} onChange={set('name')} autoComplete="name" placeholder="الاسم الكامل" {...err('name')} />
              </Field>
              <Field id="s-company" label="اسم المنشأة" error={errors.company}>
                <input id="s-company" className={inputCls} value={values.company} onChange={set('company')} autoComplete="organization" placeholder="مثال: مؤسسة ..." {...err('company')} />
              </Field>
              <Field id="s-phone" label="رقم الجوال" error={errors.phone}>
                <input id="s-phone" type="tel" inputMode="tel" dir="ltr" className={`${inputCls} text-right`} value={values.phone} onChange={set('phone')} autoComplete="tel" placeholder="05XXXXXXXX" {...err('phone')} />
              </Field>
              <Field id="s-email" label="البريد الإلكتروني" optional error={errors.email}>
                <input id="s-email" type="email" dir="ltr" className={`${inputCls} text-right`} value={values.email} onChange={set('email')} autoComplete="email" placeholder="name@example.com" {...err('email')} />
              </Field>
            </div>
            <Field id="s-city" label="المدينة الرئيسية للتوريد" error={errors.city}>
              <div className="relative">
                <select id="s-city" className={`${inputCls} appearance-none pe-10`} value={values.city} onChange={set('city')} {...err('city')}>
                  <option value="">اختر المدينة</option>
                  {CITIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                <Icon name="chevron" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-600" />
              </div>
            </Field>
            <fieldset>
              <legend className="mb-1.5 text-sm font-semibold">المنتجات التي تورّدها</legend>
              <div className="grid grid-cols-3 gap-2" aria-describedby={errors.types ? 's-types-err' : undefined}>
                {CATEGORIES.map((c) => {
                  const on = values.types.includes(c.id)
                  return (
                    <label
                      key={c.id}
                      className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-center text-sm font-semibold ring-1 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-500 ${
                        on ? 'bg-forest-800 text-sand-50 ring-forest-800' : 'bg-white text-forest-950 ring-sand-200 hover:ring-forest-600'
                      }`}
                    >
                      <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleType(c.id)} aria-invalid={!!errors.types} />
                      {on && <Icon name="check" className="size-4" strokeWidth={2.5} />}
                      {c.name}
                    </label>
                  )
                })}
              </div>
              {errors.types && <p id="s-types-err" className="mt-1.5 text-xs font-medium text-red-600">{errors.types}</p>}
            </fieldset>
            <Field id="s-notes" label="ملاحظات" optional>
              <textarea id="s-notes" rows={3} className={`${inputCls} resize-none`} value={values.notes} onChange={set('notes')} placeholder="مثال: المدن التي تغطيها، الكميات المتاحة شهريًا..." />
            </Field>
            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-forest-950/55">نموذج تجريبي: لن يتم إرسال أو حفظ أي بيانات.</p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-8 py-3.5 font-bold text-sand-50 transition hover:bg-forest-700 disabled:opacity-70"
              >
                {status === 'sending' && <span className="size-4 animate-spin rounded-full border-2 border-sand-50/30 border-t-sand-50" />}
                {status === 'sending' ? 'جارٍ الإرسال...' : 'أرسل الاهتمام'}
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}
