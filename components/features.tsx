import { MonitorPlay, Zap, Globe2, Tv, ShieldCheck, Headphones } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

  const statValues = ["60,000+", "200,000+", "99.9%", "24/7"]
const icons = [MonitorPlay, Zap, Globe2, Tv, ShieldCheck, Headphones]

export function Features({ dict }: { dict: Dictionary }) {
  const stats = [
    { value: statValues[0], label: dict.stats.channels },
    { value: statValues[1], label: dict.stats.movies },
    { value: statValues[2], label: dict.stats.uptime },
    { value: statValues[3], label: dict.stats.support },
  ]

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {dict.features.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">{dict.features.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.items.map((f, i) => {
          const Icon = icons[i] ?? MonitorPlay
          return (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
