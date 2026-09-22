import Image from "next/image"
import { Check } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

export function Showcase({ dict }: { dict: Dictionary }) {
  const t = dict.showcase
  return (
    <section id="showcase" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="relative order-2 lg:order-1">
          <Image src="/devices.png" alt={t.imageAlt} width={720} height={540} className="h-auto w-full" />
        </div>
        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t.titleLead}
            <span className="text-primary"> {t.titleAccent}</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{t.paragraph}</p>
          <ul className="flex flex-col gap-3">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
