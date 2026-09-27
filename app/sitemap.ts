import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"
import { locales, defaultLocale } from "@/lib/i18n"

// 静态导出 (output: export) 要求元数据路由声明为静态生成。
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // One entry per locale home page, each declaring hreflang alternates to all
  // other locales plus an x-default. This is the correct international-SEO shape.
  const languageAlternates = Object.fromEntries([
    ...locales.map((lang) => [lang, absoluteUrl(`/${lang}`)]),
    ["x-default", absoluteUrl(`/${defaultLocale}`)],
  ])

  const trialAlternates = Object.fromEntries([
    ...locales.map((lang) => [lang, absoluteUrl(`/${lang}/free-trial`)]),
    ["x-default", absoluteUrl(`/${defaultLocale}/free-trial`)],
  ])

  const homePages: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: languageAlternates,
    },
  }))

  const trialPages: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: absoluteUrl(`/${lang}/free-trial`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: { languages: trialAlternates },
  }))

  return [...homePages, ...trialPages]
}
