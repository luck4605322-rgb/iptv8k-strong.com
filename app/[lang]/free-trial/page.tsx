import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PlayCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TrialPlayer } from "@/components/trial/trial-player"
import { buildLanguageAlternates, getDictionary, isLocale, locales, type Locale } from "@/lib/i18n"
import { getTrialDictionary } from "@/lib/trial-dictionary"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getTrialDictionary(lang)
  const canonical = `/${lang}/free-trial`
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical, languages: buildLanguageAlternates("/free-trial") },
    openGraph: { url: canonical, title: t.metaTitle, description: t.metaDescription },
  }
}

export default async function FreeTrialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const dict = getDictionary(locale)
  const t = getTrialDictionary(locale)

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <SiteHeader lang={locale} dict={dict} />
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <PlayCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {t.badge}
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">{t.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.subtitle}</p>
        </header>
        <TrialPlayer t={t} />
      </main>
      <SiteFooter lang={locale} dict={dict} />
    </div>
  )
}
