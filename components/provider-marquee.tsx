import type { Locale } from "@/lib/i18n"

// A provider is shown either as a color brand logo (when `slug` points to an SVG
// in /public/logos) or, when no logo is available, as a branded text chip using
// its `color`. Logos are brand marks fetched from theSVG.org — review each
// brand's trademark usage.
type Provider = { name: string; slug?: string; color?: string }

// Row 1 and Row 2 are two DISTINCT sets — no brand appears in both rows.
const rowOne: Provider[] = [
  { name: "Netflix", slug: "netflix" },
  { name: "Prime Video", slug: "prime-video" },
  { name: "Disney+", slug: "disney-plus" },
  { name: "Apple TV+", slug: "apple-tv" },
  { name: "HBO Max", slug: "hbo-max" },
  { name: "Paramount+", slug: "paramountplus" },
  { name: "Hulu", slug: "hulu" },
  { name: "Peacock", slug: "peacock" },
  { name: "Crunchyroll", slug: "crunchyroll" },
  { name: "Showtime", slug: "showtime" },
  { name: "Starz", slug: "starz" },
  { name: "MUBI", slug: "mubi" },
  { name: "Plex", slug: "plex" },
  { name: "Tubi", slug: "tubi" },
  { name: "Viaplay", slug: "viaplay" },
  { name: "Rakuten TV", slug: "rakuten" },
  // text-only (no logo in library)
  { name: "Canal+", color: "#111111" },
  { name: "BritBox", color: "#1a0b3b" },
  { name: "Shudder", color: "#d81f26" },
  { name: "Stan", color: "#0075ff" },
  { name: "Hotstar", color: "#1f80e0" },
  { name: "iQIYI", color: "#00be06" },
  { name: "Crave", color: "#00a3c7" },
  { name: "Now TV", color: "#00818f" },
  { name: "Acorn TV", color: "#2e7d32" },
]

const rowTwo: Provider[] = [
  { name: "YouTube TV", slug: "youtube-tv" },
  { name: "DAZN", slug: "dazn" },
  { name: "ESPN", slug: "espn" },
  { name: "Fubo", slug: "fubo" },
  { name: "Sky", slug: "sky" },
  { name: "BBC iPlayer", slug: "bbc" },
  { name: "ITVX", slug: "itvx" },
  { name: "Channel 4", slug: "channel-4" },
  { name: "Movistar+", slug: "movistar" },
  { name: "JioCinema", slug: "jio" },
  { name: "Roku", slug: "roku" },
  { name: "Pluto TV", slug: "pluto-tv" },
  { name: "Cartoon Network", slug: "cartoon-network" },
  { name: "Nickelodeon", slug: "nickelodeon" },
  { name: "Al Jazeera", slug: "al-jazeera" },
  { name: "Bilibili", slug: "bilibili" },
  // text-only (no logo in library)
  { name: "ZEE5", color: "#6d1f7f" },
  { name: "SonyLIV", color: "#0b5fff" },
  { name: "WeTV", color: "#ff6f00" },
  { name: "Viki", color: "#17b4d6" },
  { name: "WOW", color: "#ff2b85" },
  { name: "Joyn", color: "#6f2cff" },
  { name: "Discovery+", color: "#0072ec" },
  { name: "AMC+", color: "#d9002c" },
  { name: "MGM+", color: "#a9791c" },
  { name: "Globoplay", color: "#ff2d55" },
  { name: "Kayo Sports", color: "#06b36e" },
]

const headings: Record<Locale, { title: string; accent: string; subtitle: string }> = {
  en: { title: "All your favorite platforms,", accent: "one subscription", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ and every major VOD service — included on our servers." },
  de: { title: "Alle deine Lieblingsplattformen,", accent: "ein Abo", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ und alle großen VOD-Dienste — auf unseren Servern enthalten." },
  fr: { title: "Toutes vos plateformes préférées,", accent: "un seul abonnement", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ et tous les grands services VOD — inclus sur nos serveurs." },
  es: { title: "Todas tus plataformas favoritas,", accent: "una suscripción", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ y todos los grandes servicios VOD — incluidos en nuestros servidores." },
  it: { title: "Tutte le tue piattaforme preferite,", accent: "un abbonamento", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ e tutti i principali servizi VOD — inclusi nei nostri server." },
  pt: { title: "Todas as suas plataformas favoritas,", accent: "uma assinatura", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ e todos os grandes serviços VOD — incluídos nos nossos servidores." },
  nl: { title: "Al je favoriete platforms,", accent: "één abonnement", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ en alle grote VOD-diensten — inbegrepen op onze servers." },
  pl: { title: "Wszystkie ulubione platformy,", accent: "jedna subskrypcja", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ i wszystkie najważniejsze usługi VOD — dostępne na naszych serwerach." },
  sv: { title: "Alla dina favoritplattformar,", accent: "en prenumeration", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ och alla stora VOD-tjänster — ingår på våra servrar." },
  ro: { title: "Toate platformele tale preferate,", accent: "un singur abonament", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ și toate serviciile VOD majore — incluse pe serverele noastre." },
  el: { title: "Όλες οι αγαπημένες σας πλατφόρμες,", accent: "μία συνδρομή", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ και όλες οι μεγάλες υπηρεσίες VOD — περιλαμβάνονται στους διακομιστές μας." },
  ru: { title: "Все ваши любимые платформы,", accent: "одна подписка", subtitle: "Netflix, Disney+, Prime Video, Apple TV+ и все крупные VOD-сервисы — включены на наших серверах." },
}

function ProviderChip({ provider }: { provider: Provider }) {
  return (
    <div className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-5 shadow-md sm:h-20 sm:w-48">
      {provider.slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${provider.slug}.svg`}
          alt={provider.name}
          loading="lazy"
          className="max-h-9 w-auto max-w-full object-contain sm:max-h-11"
        />
      ) : (
        <span
          className="text-center text-lg font-extrabold leading-tight tracking-tight sm:text-xl"
          style={{ color: provider.color ?? "#111111" }}
        >
          {provider.name}
        </span>
      )}
    </div>
  )
}

function Row({
  items,
  direction,
  duration,
}: {
  items: Provider[]
  direction: "left" | "right"
  duration: string
}) {
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`marquee gap-4 py-1 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {items.map((p, i) => (
          <ProviderChip key={`a-${p.name}-${i}`} provider={p} />
        ))}
        {items.map((p, i) => (
          <div key={`b-${p.name}-${i}`} aria-hidden="true">
            <ProviderChip provider={p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProviderMarquee({ lang }: { lang: Locale }) {
  const t = headings[lang] ?? headings.en
  return (
    <section className="border-y border-border bg-background/30 py-16 lg:py-24">
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
        <Row items={rowOne} direction="left" duration="70s" />
        <Row items={rowTwo} direction="right" duration="85s" />
      </div>
    </section>
  )
}
