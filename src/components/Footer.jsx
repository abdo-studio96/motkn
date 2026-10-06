import Logo from './Logo'
import Icon from './Icon'
import { NAV } from './Header'
import { CATEGORIES } from '../data'

export default function Footer({ onBecomeSupplier, onPickCategory }) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-forest-950 text-sand-100/80">
      <div className="sadu-band h-2 opacity-40" aria-hidden="true" />
      <div className="wood-grain absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7">سوق يربط موردي الحطب والفحم بالأفراد والمنشآت في المملكة العربية السعودية.</p>
          <p className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-sand-300 ring-1 ring-white/10">نسخة تجريبية للواجهة</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold text-sand-50">روابط</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="transition hover:text-sand-300">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold text-sand-50">الفئات</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}><button type="button" onClick={() => onPickCategory(c.id)} className="transition hover:text-sand-300">{c.name}</button></li>
            ))}
            <li><button type="button" onClick={onBecomeSupplier} className="transition hover:text-sand-300">انضم كمورد</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold text-sand-50">تواصل معنا</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5"><Icon name="phone" className="size-4 text-sand-300" /><span dir="ltr">+966 5X XXX XXXX</span></li>
            <li className="flex items-center gap-2.5"><Icon name="mail" className="size-4 text-sand-300" /><span dir="ltr">hello@example.com</span></li>
            <li className="flex items-center gap-2.5"><Icon name="pin" className="size-4 text-sand-300" />العنوان: يُضاف لاحقًا</li>
          </ul>
          <p className="mt-3 text-xs text-sand-100/45">بيانات التواصل أعلاه مؤقتة.</p>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-sand-100/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} سوق الحطب. جميع الحقوق محفوظة.</p>
          <p>جميع المنتجات والموردين والأسعار وشارات التحقق المعروضة بيانات تجريبية، والصور مولّدة بالذكاء الاصطناعي لأغراض العرض.</p>
        </div>
      </div>
    </footer>
  )
}
