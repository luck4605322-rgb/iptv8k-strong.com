import { siteConfig, absoluteUrl } from "@/lib/seo"
import type { Dictionary, Locale } from "@/lib/i18n"

// Prices in USD, locale-independent. Personal subscriptions + reseller credit packs.
const offerMeta = [
  { name: "1 Month", price: "6.99", period: "P1M" },
  { name: "6 Months", price: "22.99", period: "P6M" },
  { name: "1 Year", price: "32.99", period: "P1Y" },
  { name: "Reseller 120 credits", price: "230.00" },
  { name: "Reseller 240 credits", price: "440.00" },
  { name: "Reseller 360 credits", price: "640.00" },
]

export function StructuredData({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const base = absoluteUrl(`/${lang}`)

  const graph = [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: absoluteUrl("/logo-3d.png"),
      description: dict.meta.description,
      areaServed: "Europe",
      sameAs: [] as string[],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: base,
      name: siteConfig.name,
      description: dict.meta.description,
      inLanguage: lang,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@type": "Service",
      "@id": `${base}#service`,
      serviceType: "IPTV subscription and reseller service",
      name: `${siteConfig.name} Premium IPTV`,
      provider: { "@id": absoluteUrl("/#organization") },
      areaServed: "Europe",
      description: dict.meta.description,
      brand: siteConfig.name,
      offers: offerMeta.map((o) => ({
        "@type": "Offer",
        name: `${o.name} — ${siteConfig.name} IPTV`,
        price: o.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${base}#pricing`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: o.price,
          priceCurrency: "USD",
          ...(o.period ? { billingDuration: o.period } : {}),
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${base}#faq`,
      inLanguage: lang,
      mainEntity: dict.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${base}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.nav.home, item: base },
        { "@type": "ListItem", position: 2, name: dict.nav.pricing, item: `${base}#pricing` },
        { "@type": "ListItem", position: 3, name: dict.pricing.plans[2]?.name ?? "Reseller", item: `${base}#pricing` },
      ],
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  }

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text for crawlers to parse it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
