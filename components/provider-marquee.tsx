import type { Locale } from "@/lib/i18n"

type Provider = { slug: string; name: string }

// Streaming / VOD platforms available on the service. Logos live in /public/logos
// and are brand marks fetched from theSVG.org — review each brand's trademark usage.
const providers: Provider[] = [
  { slug: "netflix", name: "Netflix" },
  { slug: "prime-video", name: "Prime Video" },
  { slug: "disney-plus", name: "Disney+" },
  { slug: "apple-tv", name: "Apple TV+" },
  { slug: "hbo-max", name: "HBO Max" },
  { slug: "paramountplus", name: "Paramount+" },
  { slug: "hulu", name: "Hulu" },
  { slug: "peacock", name: "Peacock" },
  { slug: "crunchyroll", name: "Crunchyroll" },
  { slug: "showtime", name: "Showtime" },
  { slug: "starz", name: "Starz" },
  { slug: "mubi", name: "MUBI" },
  { slug: "plex", name: "Plex" },
  { slug: "tubi", name: "Tubi" },
  { slug: "viaplay", name: "Viaplay" },
  { slug: "rakuten", name: "Rakuten TV" },
  { slug: "youtube-tv", name: "YouTube TV" },
  { slug: "dazn", name: "DAZN" },
  { slug: "espn", name: "ESPN" },
  { slug: "fubo", name: "Fubo" },
  { slug: "sky", name: "Sky" },
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

function LogoChip({ provider }: { provider: Provider }) {
  return (
    <div className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-5 shadow-md sm:h-20 sm:w-48">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${provider.slug}.svg`}
        alt={provider.name}
        loading="lazy"
        className="max-h-9 w-auto max-w-full object-contain sm:max-h-11"
      />
    </div>
  )
}

function Row({ direction, duration }: { direction: "left" | "right"; duration: string }) {
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`marquee gap-4 py-1 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {providers.map((p, i) => (
          <LogoChip key={`a-${p.slug}-${i}`} provider={p} />
        ))}
        {providers.map((p, i) => (
          <div key={`b-${p.slug}-${i}`} aria-hidden="true">
            <LogoChip provider={p} />
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
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t.title}
            <span className="text-primary"> {t.accent}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Row direction="left" duration="60s" />
        <Row direction="right" duration="75s" />
      </div>
    </section>
  )
}
