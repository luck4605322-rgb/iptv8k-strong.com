import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"
import { locales, defaultLocale } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // One entry per locale home page, each declaring hreflang alternates to all
  // other locales plus an x-default. This is the correct international-SEO shape.
  const languageAlternates = Object.fromEntries([
    ...locales.map((lang) => [lang, absoluteUrl(`/${lang}`)]),
    ["x-default", absoluteUrl(`/${defaultLocale}`)],
  ])

  return locales.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: languageAlternates,
    },
  }))
}
