import { dictionaries, type Dictionary } from "@/lib/dictionaries"

// Locale codes used as URL path prefixes (e.g. /de, /fr). These also drive the
// hreflang alternates so Google can serve the right language per region.
export const locales = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv", "ro", "el", "ru"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

// Maps a locale to a full Open Graph locale (language_TERRITORY).
export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
  nl: "nl_NL",
  pl: "pl_PL",
  sv: "sv_SE",
  ro: "ro_RO",
  el: "el_GR",
  ru: "ru_RU",
}

// Human-readable label + flag for the language switcher.
// `country` is the ISO 3166-1 alpha-2 code used by flag-icons (SVG flags),
// which render consistently across OSes — unlike emoji flags that Windows
// downgrades to plain letters (e.g. "DE" instead of the German flag).
export const localeMeta: Record<Locale, { label: string; flag: string; country: string }> = {
  en: { label: "English", flag: "🇬🇧", country: "gb" },
  de: { label: "Deutsch", flag: "🇩🇪", country: "de" },
  fr: { label: "Français", flag: "🇫🇷", country: "fr" },
  es: { label: "Español", flag: "🇪🇸", country: "es" },
  it: { label: "Italiano", flag: "🇮🇹", country: "it" },
  pt: { label: "Português", flag: "🇵🇹", country: "pt" },
  nl: { label: "Nederlands", flag: "🇳🇱", country: "nl" },
  pl: { label: "Polski", flag: "🇵🇱", country: "pl" },
  sv: { label: "Svenska", flag: "🇸🇪", country: "se" },
  ro: { label: "Română", flag: "🇷🇴", country: "ro" },
  el: { label: "Ελληνικά", flag: "🇬🇷", country: "gr" },
  ru: { label: "Русский", flag: "🇷🇺", country: "ru" },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

// Builds the hreflang alternates map for a given path (default "/").
// Includes an x-default pointing at the default locale.
export function buildLanguageAlternates(path = "") {
  const suffix = path && !path.startsWith("/") ? `/${path}` : path
  const entries: Record<string, string> = {}
  for (const locale of locales) {
    entries[locale] = `/${locale}${suffix}`
  }
  entries["x-default"] = `/${defaultLocale}${suffix}`
  return entries
}

export type { Dictionary }
