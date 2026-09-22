import { Star, BadgeCheck } from "lucide-react"
import { getSocialHeadings, reviews, type Review } from "@/lib/social-proof"
import type { Locale } from "@/lib/i18n"

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
      ))}
    </div>
  )
}

function ReviewCard({
  review,
  labels,
}: {
  review: Review
  labels: { customer: string; reseller: string; verified: string }
}) {
  const roleLabel = review.role === "reseller" ? labels.reseller : labels.customer
  return (
    <figure className="flex w-72 shrink-0 flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-lg sm:w-80">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg"
          aria-hidden="true"
        >
          {review.flag}
        </span>
        <div className="flex min-w-0 flex-col">
          <figcaption className="truncate text-sm font-semibold text-foreground">{review.name}</figcaption>
          <span
            className={`w-fit rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
              review.role === "reseller" ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
            }`}
          >
            {roleLabel}
          </span>
        </div>
        <div className="ml-auto flex flex-col items-end gap-1">
          <Stars />
          <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
            <BadgeCheck className="h-3 w-3 text-primary" />
            {labels.verified}
          </span>
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed text-muted-foreground text-pretty">{review.text}</blockquote>
    </figure>
  )
}

function Row({
  items,
  direction,
  labels,
  duration,
}: {
  items: Review[]
  direction: "left" | "right"
  labels: { customer: string; reseller: string; verified: string }
  duration: string
}) {
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`marquee gap-4 py-1 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {items.map((r, i) => (
          <ReviewCard key={`a-${r.name}-${i}`} review={r} labels={labels} />
        ))}
        {items.map((r, i) => (
          <div key={`b-${r.name}-${i}`} aria-hidden="true">
            <ReviewCard review={r} labels={labels} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Reviews({ lang }: { lang: Locale }) {
  const t = getSocialHeadings(lang).reviews
  const labels = { customer: t.customer, reseller: t.reseller, verified: t.verified }
  const half = Math.ceil(reviews.length / 2)
  const rowOne = reviews.slice(0, half)
  const rowTwo = reviews.slice(half)

  return (
    <section id="reviews" className="border-y border-border bg-card/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t.title}
            <span className="text-primary"> {t.accent}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Row items={rowOne} direction="left" labels={labels} duration="70s" />
        <Row items={rowTwo} direction="right" labels={labels} duration="80s" />
      </div>
    </section>
  )
}
