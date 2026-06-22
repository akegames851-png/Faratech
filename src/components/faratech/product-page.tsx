import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Download, Mail } from "lucide-react";
import { type Lang, T, t } from "@/lib/i18n";
import type { Category, Product } from "@/lib/products";

export function ProductPage({ lang, category, product }: { lang: Lang; category: Category; product: Product }) {
  const specs = [
    { label: t(T.specFrame, lang), value: t(T.specFrameVal, lang) },
    { label: t(T.specWeight, lang), value: t(T.specWeightVal, lang) },
    { label: t(T.specWidth, lang), value: t(T.specWidthVal, lang) },
    { label: t(T.specWarranty, lang), value: t(T.specWarrantyVal, lang) },
    { label: t(T.specCertification, lang), value: "CE · ISO 13485 · EN 12183/12184" },
  ];

  const features = [t(T.featStrength, lang), t(T.featSafety, lang), t(T.featComfort, lang), t(T.featService, lang)];

  return (
    <>
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to={`/${lang}`} className="hover:text-[var(--brand-navy)]">{t(T.home, lang)}</Link>
            <ChevronRight size={12} />
            <Link to={`/${lang}/products`} className="hover:text-[var(--brand-navy)]">{t(T.products, lang)}</Link>
            <ChevronRight size={12} />
            <Link to={`/${lang}/products/${category.key}`} className="hover:text-[var(--brand-navy)]">{category.title[lang]}</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--brand-navy)]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="aspect-square bg-[var(--brand-silver)] border border-border rounded-lg flex items-center justify-center text-muted-foreground text-xs tracking-widest uppercase">
              {t(T.imagePlaceholder, lang)}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-[var(--brand-silver)] border border-border rounded-md" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[var(--brand-red)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">{category.title[lang]}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-4 leading-tight">{product.name}</h1>
            {product.series && (
              <div className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-[var(--brand-navy)]">{t(T.series, lang)}:</span>{" "}{product.series.en}
              </div>
            )}
            <p className="text-base text-muted-foreground leading-relaxed mb-8">{t(T.productDescription, lang)}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href={`/${lang}#contact`} className="inline-flex items-center gap-2 bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white font-semibold px-6 py-3 rounded-md transition-all">
                <Mail size={15} /> {t(T.inquireProduct, lang)}
              </a>
              <button className="inline-flex items-center gap-2 border border-border hover:border-[var(--brand-navy)] text-[var(--brand-navy)] font-medium px-6 py-3 rounded-md transition-colors">
                <Download size={15} /> {t(T.downloadBrochure, lang)}
              </button>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="font-heading text-lg font-bold text-[var(--brand-navy)] mb-4">{t(T.features, lang)}</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">{t(T.specifications, lang)}</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[var(--brand-navy)] mb-8">{product.name}</h2>
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 ? "bg-muted/40" : ""}>
                    <td className="font-semibold text-[var(--brand-navy)] px-6 py-4 w-1/3 border-b border-border last:border-0">{s.label}</td>
                    <td className="text-muted-foreground px-6 py-4 border-b border-border last:border-0">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <Link to={`/${lang}/products/${category.key}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-red)] transition-colors">
              <ArrowRight size={14} className="rotate-180" /> {t(T.backToCategory, lang)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
