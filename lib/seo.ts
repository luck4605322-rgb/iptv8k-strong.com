// Central SEO configuration for STRONG 8K.
// Update `siteUrl` to your production domain so canonical URLs, sitemap and
// Open Graph tags point to the right place. It can also be set via the
// NEXT_PUBLIC_SITE_URL environment variable.
export const siteConfig = {
  name: "STRONG 8K",
  legalName: "STRONG 8K IPTV",
  // No trailing slash.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://iptv8k-strong.com").replace(/\/$/, ""),
  title: "Strong 8K IPTV Official Site | Free Trial & Instant Activation",
  shortTitle: "STRONG 8K IPTV",
  description:
    "Buy a Strong 8K IPTV subscription: 60,000+ live channels, 200,000+ movies, anti-freeze 4K/8K servers, instant activation, 24 hours free trial. Works on Firestick, Samsung & LG Smart TV, Android Box, Apple TV and MAG Box.",
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
    "Strong 8K IPTV",
    "Strong 8K Official",
    "Strong 8K subscription",
    "IPTV for Firestick",
    "IPTV for Smart TV",
    "IPTV for Samsung TV",
    "IPTV for LG TV",
    "IPTV for Android Box",
    "IPTV for Apple TV",
    "IPTV for MAG Box",
    "4K anti-freeze technology",
    "8K anti-freeze technology",
    "stable live streams",
    "99.9% uptime IPTV",
    "anti-buffering server",
    "instant activation IPTV",
    "24 hours free trial IPTV",
    "buy IPTV subscription",
    "best IPTV reseller panel",
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
