import type { Dictionary } from "@/lib/i18n"

export function Faq({ dict }: { dict: Dictionary }) {
  const t = dict.faq
  return (
    <section id="faq" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex justify-center">
          <div className="section-heading max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.heading}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{t.subtitle}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {t.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
