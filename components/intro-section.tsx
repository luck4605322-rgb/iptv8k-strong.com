import type { Locale } from "@/lib/i18n"
import { getIntroContent } from "@/lib/intro-content"

// Long-form "Introduction & core advantages" section.
//
// Placed between the pricing block and the FAQ so that search engines (and
// humans who scroll past the price cards) get the depth they expect: roughly
// 600 words of English copy in four H2 sections, each one covering a distinct
// slice of the keyword matrix. The copy lives in lib/intro-content.ts so it can
// be translated without touching this file.
export function IntroSection({ lang }: { lang: Locale }) {
  const t = getIntroContent(lang)

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex justify-center">
          <div className="section-heading max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
            >
              {t.sections[0].heading}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {t.sections.map((section, index) => (
            <article key={section.heading} className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
              {/* The first section heading is already rendered above as the block H2. */}
              {index > 0 && (
                <h2 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {section.heading}
                </h2>
              )}
              <div className={index > 0 ? "mt-4 flex flex-col gap-4" : "flex flex-col gap-4"}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 border-l-2 border-primary pl-4 text-base font-medium leading-relaxed text-foreground">
          {t.closing}
        </p>
      </div>
    </section>
  )
}
