import type { Locale } from "@/lib/i18n"

// A channel is shown either as a color brand logo (when `slug` points to an SVG
// in /public/channels) or, when no logo is available or the logo is white-only,
// as a branded text chip using its `color`. Logos are brand marks fetched from
// theSVG.org — review each brand's trademark usage.
type Channel = { name: string; slug?: string; color?: string }

// Row 1 and Row 2 are two DISTINCT sets — no channel appears in both rows.
const rowOne: Channel[] = [
  { name: "CNN", slug: "cnn" },
  { name: "BBC News", slug: "bbc-news" },
  { name: "Fox News", slug: "fox-news" },
  { name: "NBC", slug: "nbc" },
  { name: "CBS", slug: "cbs" },
  { name: "FOX", slug: "fox" },
  { name: "ESPN", slug: "espn" },
  { name: "Sky", slug: "sky" },
  { name: "HBO", slug: "hbo" },
  { name: "Channel 4", slug: "channel-4" },
  { name: "ITVX", slug: "itvx" },
  { name: "ZDF", slug: "zdf" },
  { name: "Deutsche Welle", slug: "deutsche-welle" },
  { name: "Al Jazeera", slug: "al-jazeera" },
  { name: "CBC", slug: "cbc" },
  { name: "Cartoon Network", slug: "cartoon-network" },
  { name: "Nickelodeon", slug: "nickelodeon" },
  { name: "Antena 3", slug: "antena-3" },
  { name: "Foxtel", slug: "foxtel" },
  // text-only (no usable color logo in library)
  { name: "ABC", color: "#000000" },
  { name: "ARD", color: "#003480" },
  { name: "Bravo", color: "#000000" },
  { name: "Globo", color: "#ff2d55" },
]

const rowTwo: Channel[] = [
  // famous channels without a color logo in the library — branded text chips
  { name: "National Geographic", color: "#ffcc00" },
  { name: "Discovery Channel", color: "#0077c8" },
  { name: "MTV", color: "#ff2b00" },
  { name: "Comedy Central", color: "#f6b40e" },
  { name: "Eurosport", color: "#0aa64f" },
  { name: "TNT", color: "#e30613" },
  { name: "AMC", color: "#d9002c" },
  { name: "Bloomberg", color: "#000000" },
  { name: "CNBC", color: "#005594" },
  { name: "France 24", color: "#003c78" },
  { name: "Euronews", color: "#003a70" },
  { name: "TF1", color: "#0033a0" },
  { name: "RAI", color: "#004b8d" },
  { name: "Canal+", color: "#111111" },
  { name: "Univision", color: "#00a1e0" },
  { name: "Telemundo", color: "#8000ff" },
  { name: "beIN SPORTS", color: "#5b2d8e" },
  { name: "CCTV", color: "#c8102e" },
  { name: "Phoenix TV", color: "#c8102e" },
  { name: "TVB", color: "#005baa" },
  { name: "NHK", color: "#00558c" },
  { name: "Arte", color: "#ff7900" },
  { name: "MBC", color: "#111111" },
  { name: "Al Arabiya", color: "#c8102e" },
  { name: "RT", color: "#71b330" },
  { name: "Star Plus", color: "#e30613" },
]

const headings: Record<Locale, { title: string; accent: string; subtitle: string }> = {
  en: { title: "Live TV channels from", accent: "around the world", subtitle: "News, sports, kids, movies and entertainment — thousands of live channels from every continent." },
  de: { title: "Live-TV-Sender aus", accent: "aller Welt", subtitle: "Nachrichten, Sport, Kinder, Filme und Unterhaltung — tausende Live-Sender von jedem Kontinent." },
  fr: { title: "Chaînes TV en direct du", accent: "monde entier", subtitle: "Infos, sport, jeunesse, films et divertissement — des milliers de chaînes en direct de chaque continent." },
  es: { title: "Canales de TV en vivo de", accent: "todo el mundo", subtitle: "Noticias, deportes, infantil, cine y entretenimiento — miles de canales en vivo de cada continente." },
  it: { title: "Canali TV in diretta da", accent: "tutto il mondo", subtitle: "News, sport, bambini, film e intrattenimento — migliaia di canali live da ogni continente." },
  pt: { title: "Canais de TV ao vivo de", accent: "todo o mundo", subtitle: "Notícias, esportes, infantil, filmes e entretenimento — milhares de canais ao vivo de cada continente." },
  nl: { title: "Live tv-zenders van", accent: "over de hele wereld", subtitle: "Nieuws, sport, kinderen, films en entertainment — duizenden live zenders van elk continent." },
  pl: { title: "Kanały TV na żywo z", accent: "całego świata", subtitle: "Wiadomości, sport, dzieci, filmy i rozrywka — tysiące kanałów na żywo z każdego kontynentu." },
  sv: { title: "Live-TV-kanaler från", accent: "hela världen", subtitle: "Nyheter, sport, barn, filmer och underhållning — tusentals livekanaler från varje kontinent." },
  ro: { title: "Canale TV live din", accent: "toată lumea", subtitle: "Știri, sport, copii, filme și divertisment — mii de canale live de pe fiecare continent." },
  el: { title: "Ζωντανά τηλεοπτικά κανάλια από", accent: "όλο τον κόσμο", subtitle: "Ειδήσεις, αθλητικά, παιδικά, ταινίες και ψυχαγωγία — χιλιάδες ζωντανά κανάλια από κάθε ήπειρο." },
  ru: { title: "Прямой эфир ТВ-каналов со", accent: "всего мира", subtitle: "Новости, спорт, детские, кино и развлечения — тысячи прямых каналов со всех континентов." },
}

function ChannelChip({ channel }: { channel: Channel }) {
  return (
    <div className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-5 shadow-md sm:h-20 sm:w-48">
      {channel.slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/channels/${channel.slug}.svg`}
          alt={channel.name}
          loading="lazy"
          className="max-h-9 w-auto max-w-full object-contain sm:max-h-11"
        />
      ) : (
        <span
          className="text-center text-base font-extrabold leading-tight tracking-tight sm:text-lg"
          style={{ color: channel.color ?? "#111111" }}
        >
          {channel.name}
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
  items: Channel[]
  direction: "left" | "right"
  duration: string
}) {
  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`marquee gap-4 py-1 ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {items.map((c, i) => (
          <ChannelChip key={`a-${c.name}-${i}`} channel={c} />
        ))}
        {items.map((c, i) => (
          <div key={`b-${c.name}-${i}`} aria-hidden="true">
            <ChannelChip channel={c} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChannelMarquee({ lang }: { lang: Locale }) {
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
        <Row items={rowOne} direction="left" duration="75s" />
        <Row items={rowTwo} direction="right" duration="90s" />
      </div>
    </section>
  )
}
