// Central SEO configuration for STRONG 8K.
// Update `siteUrl` to your production domain so canonical URLs, sitemap and
// Open Graph tags point to the right place. It can also be set via the
// NEXT_PUBLIC_SITE_URL environment variable.
export const siteConfig = {
  name: "STRONG 8K",
  legalName: "STRONG 8K IPTV",
  // No trailing slash.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://strong8k.com").replace(/\/$/, ""),
  title: "STRONG 8K | Premium IPTV Subscription & Reseller Panel in Europe",
  shortTitle: "STRONG 8K IPTV",
  description:
    "STRONG 8K is a premium European IPTV service with 20,000+ live channels and 120,000+ movies & series in stable 4K/8K Ultra HD. Buy an IPTV subscription or start reselling with our dedicated IPTV reseller panel. Works on Smart TV, Firestick, Android, iOS, MAG and more.",
  // Primary keyword targets for IPTV subscription + reseller panel.
  keywords: [
    "IPTV",
    "IPTV subscription",
    "buy IPTV",
    "premium IPTV",
    "best IPTV subscription",
    "IPTV reseller",
    "IPTV reseller panel",
    "IPTV reseller program",
    "IPTV panel",
    "IPTV service Europe",
    "European IPTV",
    "4K IPTV",
    "8K IPTV",
    "Ultra HD IPTV",
    "live TV streaming",
    "IPTV Smart TV",
    "IPTV Firestick",
    "IPTV MAG",
    "IPTV Android",
    "sports IPTV",
    "movies and series IPTV",
    "STRONG 8K",
  ],
  locale: "en_US",
  // Locales offered by the on-site language switcher (for hreflang alternates).
  languages: ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv", "ro", "el", "ru"],
  twitter: "@strong8k",
  ogImage: "/og-image.png",
} as const

export function absoluteUrl(path = "/") {
  return `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}
