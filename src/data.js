// All content in this file is sample (demo) data for the interface only.

// AI-generated demo photos (Higgsfield). Local copies live in public/images; the rest still load
// from Higgsfield's CDN. If one fails to load, the SVG art is shown instead.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3I2Raov2D23bJPBrxeutTeAQSTK/'
export const PHOTOS = {
  acacia: '/images/acacia.webp',
  sidr: '/images/sidr.webp',
  olive: CDN + 'hf_20261006_091640_22ed9333-8c84-4c22-ab7b-0252c6b79c7d.png',
  charcoal: CDN + 'hf_20261006_091702_b26ebd71-687e-4829-80c6-e28b289dda72.png',
  briquettes: '/images/briquettes.webp',
  industrial: '/images/industrial.webp',
  catFirewood: '/images/cat-firewood.webp',
  catCharcoal: '/images/cat-charcoal.webp',
  catIndustrial: '/images/cat-industrial.webp',
  hero: '/images/hero.webp',
}

export const CATEGORIES = [
  {
    id: 'firewood',
    name: 'حطب',
    description: 'حطب مختار للتدفئة والشواء والجلسات الخارجية، بأحجام وكميات متنوعة.',
    art: 'logs-acacia',
    image: PHOTOS.catFirewood,
  },
  {
    id: 'charcoal',
    name: 'فحم',
    description: 'فحم للشواء والمجالس والاستخدام المنزلي، بأنواع وأوزان مختلفة.',
    art: 'charcoal-lump',
    image: PHOTOS.catCharcoal,
  },
  {
    id: 'industrial',
    name: 'فحم صناعي',
    description: 'كميات تجارية للمطاعم والمنشآت، بتعبئة مناسبة للتوريد المنتظم.',
    art: 'industrial-bags',
    image: PHOTOS.catIndustrial,
  },
]

export const CITIES = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الخبر',
  'القصيم',
  'حائل',
  'تبوك',
  'أبها',
]

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'حطب أكاسيا مستورد',
    category: 'firewood',
    supplier: 'مؤسسة الوادي للحطب',
    price: 85,
    unit: 'ربطة (≈ 25 كجم)',
    cities: ['الرياض', 'القصيم', 'حائل'],
    origin: 'مستورد — بلد المنشأ موضّح في الفاتورة',
    art: 'logs-acacia',
    image: PHOTOS.acacia,
    description: 'قطع متوسطة الحجم مجففة، مناسبة للجلسات الشتوية والشواء في الهواء الطلق.',
    specs: ['مجفف', 'تقطيع متوسط', 'ربطات محكمة'],
  },
  {
    id: 'p2',
    name: 'حطب سدر مستورد',
    category: 'firewood',
    supplier: 'شركة جذوة للتجارة',
    price: 120,
    unit: 'ربطة (≈ 20 كجم)',
    cities: ['جدة', 'مكة المكرمة', 'المدينة المنورة'],
    origin: 'مستورد — شهادة منشأ مرفقة',
    art: 'logs-sidr',
    image: PHOTOS.sidr,
    description: 'حطب كثيف بلون داكن ورائحة مميزة، يُفضَّل للمجالس والضيافة.',
    specs: ['كثافة عالية', 'تقطيع كبير', 'رائحة مميزة'],
  },
  {
    id: 'p3',
    name: 'حطب زيتون مقطّع',
    category: 'firewood',
    supplier: 'متجر الشعلة',
    price: 65,
    unit: 'كرتون (≈ 15 كجم)',
    cities: ['الدمام', 'الخبر', 'الرياض'],
    origin: 'مستورد — بيانات الشحنة متاحة عند الطلب',
    art: 'logs-olive',
    image: PHOTOS.olive,
    description: 'قطع صغيرة مرتبة في كرتون، سهلة التخزين ومناسبة للمدافئ المنزلية.',
    specs: ['قطع صغيرة', 'تعبئة كرتونية', 'سهل التخزين'],
  },
  {
    id: 'p4',
    name: 'فحم طبيعي للشواء',
    category: 'charcoal',
    supplier: 'شركة جذوة للتجارة',
    price: 48,
    unit: 'كيس 10 كجم',
    cities: ['جدة', 'الرياض', 'تبوك'],
    origin: 'مستورد — بلد المنشأ موضّح على العبوة',
    art: 'charcoal-lump',
    image: PHOTOS.charcoal,
    description: 'قطع فحم متوسطة وكبيرة، اشتعال ثابت ومناسب للشواء المنزلي.',
    specs: ['قطع متوسطة وكبيرة', 'دخان قليل', 'كيس مقوّى'],
  },
  {
    id: 'p5',
    name: 'فحم أقراص جوز الهند',
    category: 'charcoal',
    supplier: 'مؤسسة دار الجمر',
    price: 39,
    unit: 'كرتون 5 كجم',
    cities: ['الرياض', 'الدمام', 'أبها'],
    origin: 'مستورد — بيانات المصنع على العبوة',
    art: 'charcoal-briquette',
    image: PHOTOS.briquettes,
    description: 'أقراص منتظمة الحجم، احتراق متجانس ورماد أقل، مناسبة للمجالس.',
    specs: ['أقراص منتظمة', 'رماد أقل', 'تعبئة 5 كجم'],
  },
  {
    id: 'p6',
    name: 'فحم صناعي للمطاعم',
    category: 'industrial',
    supplier: 'مؤسسة دار الجمر',
    price: 1450,
    unit: 'طن',
    cities: ['الرياض', 'جدة', 'الدمام', 'المدينة المنورة'],
    origin: 'مستورد — مستندات الشحنة متاحة للمنشآت',
    art: 'industrial-bags',
    image: PHOTOS.industrial,
    description: 'توريد بالجملة للمطاعم والمنشآت، بتعبئة أكياس 20 كجم على منصات.',
    specs: ['أكياس 20 كجم', 'توريد دوري', 'فاتورة للمنشآت'],
  },
]

export const STEPS = [
  {
    title: 'تصفّح المنتجات',
    text: 'قارن الأنواع والأسعار ووحدات البيع ومدن التوصيل من عدة موردين في مكان واحد.',
    icon: 'search',
  },
  {
    title: 'اطلب بسهولة',
    text: 'اختر الكمية والمدينة وأرسل طلبك مباشرة للمورد المناسب لك.',
    icon: 'cart',
  },
  {
    title: 'استلم طلبك',
    text: 'يتواصل معك المورد لتأكيد موعد التوصيل، وتتابع حالة الطلب خطوة بخطوة.',
    icon: 'truck',
  },
]

export const TRUST = [
  {
    title: 'التحقق من الموردين',
    text: 'نراجع بيانات المورد ومستنداته التجارية قبل ظهور منتجاته في السوق، ونعرض شارة التحقق على صفحته.',
    icon: 'shield',
  },
  {
    title: 'معلومات منشأ المنتج',
    text: 'كل منتج يعرض مصدره وبلد المنشأ ووحدة البيع، لتعرف ما تشتريه قبل الطلب.',
    icon: 'leaf',
  },
  {
    title: 'تتبّع الطلب',
    text: 'تابع طلبك من التأكيد إلى التجهيز ثم الشحن والتسليم، مع إشعارات عند كل مرحلة.',
    icon: 'route',
  },
]

export const FAQS = [
  {
    q: 'ما هو سوق الحطب؟',
    a: 'منصة تربط موردي الحطب والفحم بالمشترين من الأفراد والمنشآت، لتسهيل المقارنة والطلب والتوصيل. هذه الصفحة نسخة تجريبية للواجهة فقط.',
  },
  {
    q: 'هل المنتجات والأسعار المعروضة حقيقية؟',
    a: 'لا، جميع المنتجات والموردين والأسعار في هذه الصفحة بيانات تجريبية لأغراض العرض فقط.',
  },
  {
    q: 'كيف يتم التحقق من الموردين؟',
    a: 'المخطط أن تتم مراجعة السجل التجاري ومستندات المورد قبل تفعيل حسابه. شارات التحقق الظاهرة حاليًا تجريبية.',
  },
  {
    q: 'هل يمكن للمنشآت الطلب بكميات كبيرة؟',
    a: 'نعم، فئة الفحم الصناعي مخصصة للكميات التجارية مثل المطاعم والفنادق، مع إمكانية التوريد الدوري حسب اتفاقك مع المورد.',
  },
  {
    q: 'كيف أنضم كمورد؟',
    a: 'اضغط على «انضم كمورد» واملأ نموذج إبداء الاهتمام، وسيتواصل معك الفريق عند إطلاق المنصة. النموذج الحالي تجريبي ولا يرسل أي بيانات.',
  },
]

export const formatPrice = (n) => n.toLocaleString('en-US')
