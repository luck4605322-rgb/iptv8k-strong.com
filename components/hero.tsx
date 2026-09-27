import { PlayCircle, Sparkles } from "lucide-react"
import type { Dictionary, Locale } from "@/lib/i18n"

export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.hero
  return (
    <section className="relative overflow-hidden">
      {/* The animated site-wide tech background shows through here; this scrim
          just keeps the copy readable over it. */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.008 60 / 0.88) 0%, oklch(0.13 0.008 60 / 0.6) 40%, oklch(0.13 0.008 60 / 0.25) 100%), radial-gradient(60% 50% at 70% 20%, oklch(0.8 0.14 82 / 0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {t.badge}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.titleLine1}
            <span className="block text-primary">{t.titleLine2}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.paragraph}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`/${lang}/free-trial`}
              className="btn-gradient inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-7 text-base font-semibold shadow-lg shadow-primary/20 [&_svg]:size-5"
            >
              <PlayCircle />
              {t.trial}
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/5 px-7 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.viewPlans}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            {t.bullets.map((b) => (
              <span key={b}>✓ {b}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Product showcase video served from /public, looping muted */}
          <video
            className="h-auto w-full rounded-xl"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-tv.png"
            aria-label={t.imageAlt}
          >
            <source src="/hero-showcase.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
