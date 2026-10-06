import { ProductImage } from './ProductArt'
import { PHOTOS } from '../data'
import Icon from './Icon'

export default function Hero({ onBecomeSupplier }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-900 pt-28 pb-36 text-sand-50 sm:pt-32 lg:pt-36 lg:pb-44">
      {/* background layers */}
      <div className="wood-grain absolute inset-0 -z-10 opacity-[0.07]" aria-hidden="true" />
      <div className="absolute -top-40 -left-32 -z-10 size-[34rem] rounded-full bg-forest-600/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 -z-10 size-[26rem] rounded-full bg-ember-500/15 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-sand-200 ring-1 ring-sand-200/20">
            <Icon name="flame" className="size-4 text-ember-400" />
            سوق سعودي للحطب والفحم
          </span>
          <h1 className="mt-6 text-[2.15rem] leading-[1.35] font-extrabold text-balance sm:text-5xl sm:leading-[1.3] lg:text-[3.4rem]">
            اشترِ الحطب والفحم
            <br />
            من <span className="relative whitespace-nowrap text-sand-300">موردين موثوقين<svg className="absolute -bottom-2 left-0 h-3 w-full text-ember-500/80" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9c50-6 140-8 196-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-sand-100/80 sm:text-lg sm:leading-9">
            قارن المنتجات والأسعار من موردين معروفين، واعرف منشأ ما تشتريه، واطلب التوصيل إلى مدينتك — للبيت أو للمنشأة.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sand-300 px-7 py-3.5 text-base font-bold text-forest-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-sand-200"
            >
              تصفّح المنتجات
              <Icon name="arrow" className="size-5 transition-transform group-hover:-translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onBecomeSupplier}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-sand-50 ring-1 ring-sand-50/30 transition hover:bg-white/10"
            >
              <Icon name="store" className="size-5" />
              انضم كمورد
            </button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sand-100/75">
            {['أفراد ومنشآت', 'معلومات المنشأ لكل منتج', 'تتبّع الطلب'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-forest-600/70 text-sand-200">
                  <Icon name="check" className="size-3.5" strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual collage */}
        <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:150ms] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <ProductImage eager product={{ name: 'سيارات محمّلة بالحطب في ساحة مورد', art: 'logs-acacia', image: PHOTOS.hero }} className="block aspect-[4/3] w-full" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/50 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-2 w-[44%] animate-float overflow-hidden rounded-2xl shadow-xl shadow-black/40 ring-4 ring-forest-900 sm:-right-8">
            <ProductImage eager product={{ name: 'فحم طبيعي', art: 'charcoal-lump', image: PHOTOS.charcoal }} className="block aspect-[4/3] w-full" />
          </div>
          <div className="absolute top-5 -left-2 flex items-center gap-2.5 rounded-2xl bg-paper/95 px-3.5 py-2.5 text-forest-900 shadow-xl backdrop-blur sm:-left-6">
            <span className="grid size-9 place-items-center rounded-xl bg-forest-100 text-forest-700">
              <Icon name="shield" className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">مورد موثّق</span>
              <span className="block text-[11px] text-sand-600">شارة تجريبية</span>
            </span>
          </div>
          <div className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-full bg-paper/95 px-4 py-2 text-sm font-semibold text-forest-900 shadow-xl sm:flex">
            <Icon name="pin" className="size-4 text-ember-500" />
            التوصيل لمدينتك
          </div>
        </div>
      </div>

      {/* decorative band */}
      <div className="sadu-band absolute inset-x-0 bottom-0 h-2 opacity-30" aria-hidden="true" />
    </section>
  )
}
