import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappWith } from "@/lib/contact"
import type { Dictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"

// Prices are locale-independent (USD). Feature lists reuse the already-translated
// plans from the dictionary, so no per-language dictionary changes are needed.
const personalPrices = [
  { price: "$6.99", periodKey: "perMonth" as const, planIndex: 0, highlight: false },
  { price: "$22.99", periodKey: "per6mo" as const, planIndex: 1, highlight: false },
  { price: "$32.99", periodKey: "perYear" as const, planIndex: 1, highlight: true },
]

const resellerPrices = [
  { price: "$230", credits: 120, highlight: false },
  { price: "$440", credits: 240, highlight: true },
  { price: "$640", credits: 360, highlight: false },
]

// Compact translations for the few new labels this section adds.
const labels: Record<
  Locale,
  {
    personalTitle: string
    resellerTitle: string
    credits: string
    per6mo: string
    names: [string, string, string]
    resellerNote: string
  }
> = {
  en: { personalTitle: "Personal plans", resellerTitle: "Reseller plans", credits: "credits", per6mo: "/ 6 months", names: ["1 Month", "6 Months", "1 Year"], resellerNote: "One-time credit top-up · resell as you like" },
  de: { personalTitle: "Privatpakete", resellerTitle: "Reseller-Pakete", credits: "Credits", per6mo: "/ 6 Monate", names: ["1 Monat", "6 Monate", "1 Jahr"], resellerNote: "Einmaliges Credit-Aufladen · frei weiterverkaufen" },
  fr: { personalTitle: "Offres particuliers", resellerTitle: "Offres revendeur", credits: "crédits", per6mo: "/ 6 mois", names: ["1 mois", "6 mois", "1 an"], resellerNote: "Recharge de crédits unique · revendez librement" },
  es: { personalTitle: "Planes personales", resellerTitle: "Planes de revendedor", credits: "créditos", per6mo: "/ 6 meses", names: ["1 mes", "6 meses", "1 año"], resellerNote: "Recarga única de créditos · revende como quieras" },
  it: { personalTitle: "Piani personali", resellerTitle: "Piani rivenditore", credits: "crediti", per6mo: "/ 6 mesi", names: ["1 mese", "6 mesi", "1 anno"], resellerNote: "Ricarica crediti una tantum · rivendi come vuoi" },
  pt: { personalTitle: "Planos pessoais", resellerTitle: "Planos de revenda", credits: "créditos", per6mo: "/ 6 meses", names: ["1 mês", "6 meses", "1 ano"], resellerNote: "Carregamento único de créditos · revenda como quiser" },
  nl: { personalTitle: "Persoonlijke pakketten", resellerTitle: "Reseller-pakketten", credits: "credits", per6mo: "/ 6 maanden", names: ["1 maand", "6 maanden", "1 jaar"], resellerNote: "Eenmalige credit-opwaardering · vrij doorverkopen" },
  pl: { personalTitle: "Plany indywidualne", resellerTitle: "Plany dla resellerów", credits: "kredyty", per6mo: "/ 6 miesięcy", names: ["1 miesiąc", "6 miesięcy", "1 rok"], resellerNote: "Jednorazowe doładowanie kredytów · odsprzedawaj dowolnie" },
  sv: { personalTitle: "Privatpaket", resellerTitle: "Återförsäljarpaket", credits: "krediter", per6mo: "/ 6 månader", names: ["1 månad", "6 månader", "1 år"], resellerNote: "Engångspåfyllning av krediter · sälj vidare fritt" },
  ro: { personalTitle: "Planuri personale", resellerTitle: "Planuri de revânzare", credits: "credite", per6mo: "/ 6 luni", names: ["1 lună", "6 luni", "1 an"], resellerNote: "Reîncărcare unică de credite · revinde cum vrei" },
  el: { personalTitle: "Προσωπικά πακέτα", resellerTitle: "Πακέτα μεταπωλητή", credits: "μονάδες", per6mo: "/ 6 μήνες", names: ["1 μήνας", "6 μήνες", "1 έτος"], resellerNote: "Εφάπαξ ανανέωση μονάδων · μεταπωλήστε ελεύθερα" },
  ru: { personalTitle: "Личные тарифы", resellerTitle: "Тарифы реселлера", credits: "кредитов", per6mo: "/ 6 месяцев", names: ["1 месяц", "6 месяцев", "1 год"], resellerNote: "Разовое пополнение кредитов · перепродавайте свободно" },
}

function Card({
  name,
  desc,
  price,
  period,
  features,
  highlight,
  mostPopular,
  cta,
  orderHref,
}: {
  name: string
  desc?: string
  price: string
  period?: string
  features: string[]
  highlight: boolean
  mostPopular: string
  cta: string
  orderHref: string
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        highlight
          ? "border-primary bg-card shadow-[0_0_40px_-12px_oklch(0.8_0.14_82_/_0.4)]"
          : "border-border bg-card"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          {mostPopular}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold">{name}</h3>
      {desc && <p className="mt-1 text-sm text-muted-foreground">{desc}</p>}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold">{price}</span>
        {period && <span className="text-muted-foreground">{period}</span>}
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="btn-gradient mt-8 w-full font-semibold">
        <a href={orderHref} target="_blank" rel="noopener noreferrer">
          {cta}
        </a>
      </Button>
    </div>
  )
}

export function Pricing({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.pricing
  const l = labels[lang]
  const periodText = { perMonth: t.perMonth, perYear: t.perYear, per6mo: l.per6mo }

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.heading}</h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">{t.subtitle}</p>
      </div>

      {/* Personal plans */}
      <h3 className="mt-12 text-center font-display text-xl font-semibold uppercase tracking-wide text-primary">
        {l.personalTitle}
      </h3>
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-3">
        {personalPrices.map((meta, i) => {
          const plan = t.plans[meta.planIndex]
          return (
            <Card
              key={l.names[i]}
              name={l.names[i]}
              desc={plan.desc}
              price={meta.price}
              period={periodText[meta.periodKey]}
              features={plan.features}
              highlight={meta.highlight}
              mostPopular={t.mostPopular}
              cta={`${t.choose} · ${l.names[i]}`}
              orderHref={whatsappWith(`Hi STRONG 8K, I'd like the ${l.names[i]} plan (${meta.price}).`)}
            />
          )
        })}
      </div>

      {/* Reseller plans (credit packs) */}
      <h3 className="mt-16 text-center font-display text-xl font-semibold uppercase tracking-wide text-primary">
        {l.resellerTitle}
      </h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">{l.resellerNote}</p>
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-3">
        {resellerPrices.map((meta) => {
          const resellerPlan = t.plans[2]
          const name = `${meta.credits} ${l.credits}`
          return (
            <Card
              key={meta.credits}
              name={name}
              price={meta.price}
              features={resellerPlan.features}
              highlight={meta.highlight}
              mostPopular={t.mostPopular}
              cta={`${t.choose} · ${name}`}
              orderHref={whatsappWith(`Hi STRONG 8K, I'd like the reseller pack: ${name} (${meta.price}).`)}
            />
          )
        })}
      </div>
    </section>
  )
}
