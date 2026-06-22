import type { Lang } from "./i18n";

export type ProductCategoryKey =
  | "power-wheelchairs"
  | "manual-wheelchairs"
  | "shower-wheelchairs"
  | "patient-lifts"
  | "mobility-scooters";

export type Product = {
  slug: string;
  name: string; // model name — NOT translated
  code?: string; // not translated
  series?: { en: string; fa?: string; ar?: string };
  tagline?: { en: string; fa?: string; ar?: string };
};

export type Category = {
  key: ProductCategoryKey;
  title: Record<Lang, string>;
  blurb: Record<Lang, string>;
  products: Product[];
};

const cat = (
  key: ProductCategoryKey,
  title: Record<Lang, string>,
  blurb: Record<Lang, string>,
  products: Product[],
): Category => ({ key, title, blurb, products });

const power: Product[] = [
  // Upholstered series
  { slug: "fateh-lx2", name: "Fateh LX2 Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "levo-standing", name: "LEVO Electric Standing Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "fateh-capitan", name: "Fateh Capitan Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "fateh-extra-new", name: "Fateh Extra New Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "fateh-jx2-lift", name: "Fateh JX2 Power Wheelchair – Lift Model", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "fateh-eco", name: "Fateh Eco Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "fateh-110", name: "Fateh 110 Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "upholstered-power", name: "Upholstered Power Wheelchair", series: { en: "Upholstered Power Wheelchairs" } },
  { slug: "spider-seat-elevation", name: "Spider Power Wheelchair with Power Seat Elevation", series: { en: "Upholstered Power Wheelchairs" } },
  // Foldable series
  { slug: "beta25", name: "Beta25 Foldable Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "beta25-lithium-al", name: "Beta25 Lithium Foldable Power Wheelchair (AL)", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "kid-model", name: "Kid Model Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "gamma45", name: "Gamma45 Foldable Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "gamma45-lithium", name: "Gamma45 Lithium Foldable Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "super-gamma", name: "Super Gamma Foldable Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "model-213-carbon", name: "Model 213 Carbon Fiber Lightweight Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
  { slug: "starwheel", name: "Starwheel Foldable Power Wheelchair", series: { en: "Foldable Power Wheelchairs" } },
];

const manual: Product[] = [
  { slug: "innuovo-aluminum-sport", name: "Innuovo Aluminum Foldable Sport Manual Wheelchair" },
  { slug: "innuovo-carbon-fiber", name: "Innuovo Carbon Fiber Manual Wheelchair" },
  { slug: "alpha550", name: "Alpha550 Standard Manual Wheelchair" },
  { slug: "alpha750", name: "Alpha750 Standard Manual Wheelchair (AL, XL)" },
  { slug: "alpha850-al", name: "Alpha850 Standard Manual Wheelchair (AL)" },
  { slug: "alpha851-al", name: "Alpha851 Standard Manual Wheelchair (AL)" },
  { slug: "alpha950", name: "Alpha950 Standard Manual Wheelchair" },
  { slug: "alpha951", name: "Alpha951 Standard Manual Wheelchair" },
  { slug: "xigma-sport", name: "Xigma Sport Manual Wheelchair (Optional)" },
  { slug: "stair-climbing", name: "Stair-Climbing Wheelchair" },
];

const shower: Product[] = [
  { slug: "ava650", name: "Ava650 Shower Commode Wheelchair" },
  { slug: "ava750", name: "Ava750 Shower Commode Wheelchair" },
  { slug: "ava850", name: "Ava850 Shower Commode Wheelchair" },
];

const lifts: Product[] = [
  { slug: "personal-sit-to-stand", name: "Personal Sit-to-Stand Floor Lift" },
  { slug: "l160", name: "L160 Electric Patient Lift" },
  { slug: "l180", name: "L180 Electric Patient Lift" },
  { slug: "l260", name: "L260 Electric Patient Lift" },
  { slug: "l280", name: "L280 Electric Patient Lift" },
  { slug: "linak-jack", name: "Linak Jack Electric Patient Lift" },
];

const scooters: Product[] = [
  { slug: "m150-4wheel", name: "M150 New 4-Wheel Powered Mobility Scooter" },
];

export const CATEGORIES: Category[] = [
  cat(
    "power-wheelchairs",
    { en: "Power Wheelchairs", fa: "ویلچرهای برقی", ar: "كراسي متحركة كهربائية" },
    {
      en: "Intelligent powered mobility — from upholstered clinical models to foldable carbon-fiber lightweights.",
      fa: "تحرک برقی هوشمند — از مدل‌های روکش‌دار بالینی تا مدل‌های تاشو و سبک با فیبر کربن.",
      ar: "تنقّل كهربائي ذكي — من الموديلات السريرية المنجدة إلى الموديلات القابلة للطي بألياف الكربون الخفيفة.",
    },
    power,
  ),
  cat(
    "manual-wheelchairs",
    { en: "Manual Wheelchairs", fa: "ویلچرهای دستی", ar: "كراسي متحركة يدوية" },
    {
      en: "Ultralight, sport, and standard manual wheelchairs engineered for daily clinical and active use.",
      fa: "ویلچرهای دستی فوق‌سبک، ورزشی و استاندارد، مهندسی‌شده برای استفاده روزانه بالینی و فعال.",
      ar: "كراسي متحركة يدوية فائقة الخفة ورياضية وقياسية، مصممة للاستخدام السريري والنشط اليومي.",
    },
    manual,
  ),
  cat(
    "shower-wheelchairs",
    { en: "Shower Wheelchairs", fa: "ویلچرهای حمام", ar: "كراسي متحركة للاستحمام" },
    {
      en: "Corrosion-resistant shower and commode chairs designed for hygiene and clinical safety.",
      fa: "صندلی‌های حمام و توالت مقاوم در برابر خوردگی، طراحی‌شده برای بهداشت و ایمنی بالینی.",
      ar: "كراسي استحمام ومرحاض مقاومة للتآكل، مصممة للنظافة والسلامة السريرية.",
    },
    shower,
  ),
  cat(
    "patient-lifts",
    { en: "Patient Lifts", fa: "بالابرهای بیمار", ar: "رافعات المرضى" },
    {
      en: "Electric and sit-to-stand patient lifts for safe transfer in hospitals, care facilities and homes.",
      fa: "بالابرهای بیمار برقی و نشستن-به-ایستادن برای جابجایی ایمن در بیمارستان، مراکز مراقبت و منزل.",
      ar: "رافعات مرضى كهربائية ومن الجلوس إلى الوقوف لنقل آمن في المستشفيات ومراكز الرعاية والمنازل.",
    },
    lifts,
  ),
  cat(
    "mobility-scooters",
    { en: "Mobility Scooters", fa: "اسکوترهای حرکتی", ar: "سكوترات التنقل" },
    {
      en: "Stable four-wheel powered scooters for outdoor independence and long-range use.",
      fa: "اسکوترهای برقی چهارچرخ پایدار برای استقلال در فضای باز و استفاده در مسافت طولانی.",
      ar: "سكوترات كهربائية بأربع عجلات مستقرة لاستقلالية في الهواء الطلق واستخدام لمسافات طويلة.",
    },
    scooters,
  ),
];

export const getCategory = (key: string) =>
  CATEGORIES.find((c) => c.key === key);
export const getProduct = (catKey: string, slug: string) =>
  getCategory(catKey)?.products.find((p) => p.slug === slug);
