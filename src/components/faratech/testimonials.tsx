import { type Lang, T, t } from "@/lib/i18n";
import { Quote } from "lucide-react";

export function Testimonials({ lang }: { lang: Lang }) {
  const quotes = [
    { name: "Dr. Anna Weber", role: t(T.testi1Role, lang), text: t(T.testi1Text, lang) },
    { name: "Mark Holloway", role: t(T.testi2Role, lang), text: t(T.testi2Text, lang) },
    { name: "Sara Ito", role: t(T.testi3Role, lang), text: t(T.testi3Text, lang) },
  ];
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">{t(T.voicesField, lang)}</span>
            <div className="w-8 h-px bg-[var(--brand-red)]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)]">{t(T.testimonialsTitle, lang)}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="bg-white border border-border rounded-lg p-7">
              <Quote size={22} className="text-[var(--brand-red)] mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6">"{q.text}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-sm text-[var(--brand-navy)]">{q.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
