import { MonitorPlay, Zap, Globe2, Tv, ShieldCheck, Headphones } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

  const statValues = ["60,000+", "200,000+", "99.9%", "24/7"]
const icons = [MonitorPlay, Zap, Globe2, Tv, ShieldCheck, Headphones]
const bgImages = [
  "/features/uhd.png",
  "/features/servers.png",
  "/features/global.png",
  "/features/devices.png",
  "/features/secure.png",
  "/features/support.png",
]

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

      <div className="mt-20 flex justify-center">
        <div className="section-heading max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {dict.features.heading}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{dict.features.subtitle}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.items.map((f, i) => {
          const Icon = icons[i] ?? MonitorPlay
          const bg = bgImages[i]
          return (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-primary/50"
            >
              {/* Feature-specific background image with a dark overlay for readability */}
              <img
                src={bg || "/placeholder.svg"}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.16 0.008 60 / 0.35) 0%, oklch(0.14 0.008 60 / 0.62) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
