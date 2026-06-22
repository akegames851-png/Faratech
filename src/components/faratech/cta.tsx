import { useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { type Lang, T, t } from "@/lib/i18n";

const PHONE = "021-7751 6927-28";

export function CTA({ lang }: { lang: Lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">{t(T.ctaEyebrow, lang)}</span>
            <div className="w-8 h-px bg-[var(--brand-red)]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)] mb-6 text-balance">{t(T.ctaTitle, lang)}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t(T.ctaSub, lang)}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-[var(--brand-navy)] rounded-2xl p-8 text-white">
              <h3 className="font-heading text-lg font-bold mb-6">{t(T.getInTouch, lang)}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">{t(T.intlSales, lang)}</div>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors" dir="ltr">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">{t(T.email, lang)}</div>
                    <a href="mailto:info@faratech.com" className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors">info@faratech.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">{t(T.hq, lang)}</div>
                    <address className="text-sm font-medium not-italic leading-relaxed whitespace-pre-line">{t(T.hqAddress, lang)}</address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--brand-navy)] mb-3">{t(T.thankYou, lang)}</h3>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-[var(--brand-red)] hover:underline">{t(T.sendAnother, lang)}</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-[var(--brand-navy)]">{t(T.requestQuote, lang)}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input required type="text" placeholder={t(T.formName, lang)} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-navy)]" />
                  <input required type="email" placeholder={t(T.formEmail, lang)} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-navy)]" />
                  <input type="text" placeholder={t(T.formOrg, lang)} value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="md:col-span-2 w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-navy)]" />
                </div>
                <textarea required rows={5} placeholder={t(T.formMessage, lang)} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-navy)]" />
                <button type="submit" className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors">
                  {t(T.requestQuote, lang)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
