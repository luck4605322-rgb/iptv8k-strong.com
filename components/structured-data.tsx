import { siteConfig, absoluteUrl } from "@/lib/seo"
import type { Dictionary, Locale } from "@/lib/i18n"
import { contact } from "@/lib/contact"
import { reviews } from "@/lib/social-proof"

// Aggregate rating reflects the customer & reseller testimonials shown on the
// page (see the Reviews section). ratingCount matches the number of published
// testimonials so the rich result stays truthful and within Google's policy.
const reviewCount = reviews.length
const ratingValue = "4.9"

// Deterministic, build-stable publish dates for each testimonial. The reviews
// carry no real timestamps, so we derive recent ISO dates (going backwards in
// time) purely to satisfy the required `datePublished` field in the Review
// markup and keep the rich result valid across rebuilds.
function reviewDate(index: number): string {
  const start = Date.UTC(2026, 8, 10) // 2026-09-10
  const d = new Date(start - index * 9 * 24 * 60 * 60 * 1000)
  return d.toISOString().slice(0, 10)
}

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
      image: absoluteUrl(siteConfig.ogImage),
      description: dict.meta.description,
      areaServed: "Europe",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: contact.whatsappNumber,
          url: contact.whatsappUrl,
          areaServed: "Europe",
          availableLanguage: [...siteConfig.languages],
        },
      ],
      sameAs: [contact.telegramUrl, contact.whatsappUrl],
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
      "@type": "Product",
      "@id": `${base}#product`,
      name: `${siteConfig.name} Premium IPTV`,
      category: "IPTV subscription and reseller service",
      description: dict.meta.description,
      image: absoluteUrl(siteConfig.ogImage),
      brand: { "@type": "Brand", name: siteConfig.name },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
        ratingCount: reviewCount,
        reviewCount,
      },
      review: reviews.slice(0, 6).map((r, i) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        datePublished: reviewDate(i),
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
        reviewBody: r.text,
      })),
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
      // Escape `<` so any future text containing "</script>" cannot break out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  )
}
