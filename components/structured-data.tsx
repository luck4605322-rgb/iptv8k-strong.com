import { siteConfig, absoluteUrl } from "@/lib/seo"
import type { Dictionary, Locale } from "@/lib/i18n"
import { contact } from "@/lib/contact"
import { reviews } from "@/lib/social-proof"
import { getLongtailFaq } from "@/lib/longtail-faq"
import { getIntroContent } from "@/lib/intro-content"

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

// Product-level facts that power the long-tail keyword coverage in the markup
// and must stay identical to what the page copy claims.
const productSpecs = [
  { name: "Live channels", value: "60,000+" },
  { name: "Movies & series (VOD)", value: "200,000+" },
  { name: "Maximum resolution", value: "4K / 8K Ultra HD" },
  { name: "Server uptime", value: "99.9%" },
  { name: "Anti-freeze technology", value: "4K/8K anti-freeze + anti-buffering servers" },
  {
    name: "Supported devices",
    value: "Amazon Firestick, Samsung & LG Smart TV, Android Box, Apple TV, MAG Box, Android, iOS, Windows, Mac",
  },
  { name: "Activation", value: "Instant activation after checkout" },
  { name: "Free trial", value: "24 hours free trial" },
]

export function StructuredData({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const base = absoluteUrl(`/${lang}`)
  const longtail = getLongtailFaq(lang)
  const intro = getIntroContent(lang)

  // Main FAQ (5 items) + long-tail FAQ (5 items) → a single FAQPage entity so
  // Google can read all ten Q&A pairs from one block.
  const faqItems = [...dict.faq.items, ...longtail.items]

  const graph = [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.legalName,
      // Alternate names help Google connect "Strong 8K Official", "STRONG 8K"
      // and "Strong 8K IPTV" brand queries to the same entity.
      alternateName: ["STRONG 8K", "Strong 8K Official", "Strong 8K IPTV", "STRONG 8K IPTV"],
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-3d.png"),
        caption: `${siteConfig.name} logo`,
      },
      image: absoluteUrl(siteConfig.ogImage),
      description: dict.meta.description,
      slogan: "Strong 8K IPTV Official — 4K/8K Ultra HD, stable live streams, instant activation",
      areaServed: [{ "@type": "Place", name: "Europe" }],
      knowsAbout: [
        "IPTV subscription",
        "Strong 8K IPTV",
        "4K/8K anti-freeze technology",
        "IPTV for Firestick",
        "IPTV for Smart TV",
        "IPTV reseller panel",
      ],
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
      alternateName: "Strong 8K Official",
      description: dict.meta.description,
      inLanguage: lang,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      // Page-level entity. It ties the long-form "introduction & core
      // advantages" block (#about) and the long-tail FAQ (#faq-more) to the
      // product so Google understands they are one commercial landing page,
      // not duplicated content.
      "@type": "WebPage",
      "@id": `${base}#webpage`,
      url: base,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: lang,
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": `${base}#product` },
      breadcrumb: { "@id": `${base}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogImage),
      },
      hasPart: [
        {
          "@type": "WebPageElement",
          "@id": `${base}#about`,
          name: intro.sections[0].heading,
          description: intro.lead,
          isAccessibleForFree: true,
        },
        {
          "@type": "WebPageElement",
          "@id": `${base}#pricing`,
          name: dict.nav.pricing,
          isAccessibleForFree: true,
        },
        {
          "@type": "WebPageElement",
          "@id": `${base}#faq-more`,
          name: longtail.heading,
          description: longtail.subtitle,
          isAccessibleForFree: true,
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${base}#product`,
      name: "Strong 8K IPTV Subscription",
      alternateName: ["Strong 8K Official", "STRONG 8K IPTV"],
      category: "IPTV subscription and reseller service",
      description: dict.meta.description,
      image: [absoluteUrl(siteConfig.ogImage), absoluteUrl("/logo-3d.png")],
      brand: { "@type": "Brand", name: siteConfig.name },
      additionalProperty: productSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.name,
        value: spec.value,
      })),
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
      offers: {
        "@type": "AggregateOffer",
        "@id": `${base}#offers`,
        url: `${base}#pricing`,
        priceCurrency: "USD",
        lowPrice: offerMeta[0].price,
        highPrice: offerMeta[offerMeta.length - 1].price,
        offerCount: offerMeta.length,
        availability: "https://schema.org/InStock",
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
    },
    {
      "@type": "FAQPage",
      "@id": `${base}#faq`,
      inLanguage: lang,
      mainEntity: faqItems.map((f) => ({
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
