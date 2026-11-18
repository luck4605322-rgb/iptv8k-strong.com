import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"
import { locales, defaultLocale } from "@/lib/i18n"

// 静态导出 (output: export) 要求元数据路由声明为静态生成。
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Single build-stable timestamp: every locale renders the same page, so a
  // per-entry `new Date()` would only add noise to the diff.
  const now = new Date()

  // hreflang map reused by every entry: 12 locales + x-default. Each URL is
  // absolute because Google ignores relative alternates in sitemaps.
  const languageAlternates = Object.fromEntries([
    ...locales.map((lang) => [lang, absoluteUrl(`/${lang}`)]),
    ["x-default", absoluteUrl(`/${defaultLocale}`)],
  ])

  // Root entry: `/` is the language-detection redirect, so it is listed once
  // with the highest priority and the same alternates map.
  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
    alternates: {
      languages: languageAlternates,
    },
  }

  // One entry per locale home page, each declaring hreflang alternates to all
  // other locales plus an x-default. This is the correct international-SEO shape.
  const localeEntries: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: languageAlternates,
    },
  }))

  return [rootEntry, ...localeEntries]
}
