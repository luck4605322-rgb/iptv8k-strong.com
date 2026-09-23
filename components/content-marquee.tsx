import { Star } from "lucide-react"
import { getSocialHeadings, moviePosters, seriesPosters, type Poster } from "@/lib/social-proof"
import type { Locale } from "@/lib/i18n"

function PosterCard({ poster, newLabel }: { poster: Poster; newLabel: string }) {
  return (
    <div className="group relative w-36 shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-lg sm:w-44">
      <div className="relative aspect-[2/3] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster.img || "/placeholder.svg"}
          alt={`${poster.title} — ${poster.genre}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" aria-hidden="true" />
        {poster.isNew && (
          <span className="absolute left-2 top-2 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
            {newLabel}
          </span>
        )}
        <span className="absolute right-2 top-2 flex items-center gap-0.5 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur-sm">
          <Star className="h-3 w-3 fill-primary text-primary" />
          {poster.rating}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-2.5">
          <p className="truncate text-sm font-semibold text-white">{poster.title}</p>
          <p className="text-[11px] text-white/70">
            {poster.genre} · {poster.year}
          </p>
        </div>
      </div>
    </div>
  )
}

function Row({
  posters,
  direction,
  newLabel,
  duration,
}: {
  posters: Poster[]
  direction: "left" | "right"
  newLabel: string
  duration: string
}) {
  return (
    <div className="marquee-wrap relative overflow-hidden">
      {/* Duplicate the list once so the -50% loop is seamless. aria-hidden on
          the clone keeps screen readers from reading every title twice. */}
      <div
        className={`marquee gap-3 py-1 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {posters.map((p, i) => (
          <PosterCard key={`a-${p.title}-${i}`} poster={p} newLabel={newLabel} />
        ))}
        {posters.map((p, i) => (
          <div key={`b-${p.title}-${i}`} aria-hidden="true">
            <PosterCard poster={p} newLabel={newLabel} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContentMarquee({ lang }: { lang: Locale }) {
  const t = getSocialHeadings(lang).content
  return (
    <section id="content" className="border-y border-border bg-background/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="section-heading max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {t.title}
              <span className="text-primary"> {t.accent}</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t.movies}</p>
        </div>
        <Row posters={moviePosters} direction="left" newLabel={t.new} duration="80s" />

        <div className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t.series}</p>
        </div>
        <Row posters={seriesPosters} direction="right" newLabel={t.new} duration="90s" />
      </div>
    </section>
  )
}
