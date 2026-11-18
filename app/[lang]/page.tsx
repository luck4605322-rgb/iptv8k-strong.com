import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { ContentMarquee } from "@/components/content-marquee"
import { ProviderMarquee } from "@/components/provider-marquee"
import { ChannelMarquee } from "@/components/channel-marquee"
import { Reviews } from "@/components/reviews"
import { WhatsAppProof } from "@/components/whatsapp-proof"
import { Pricing } from "@/components/pricing"
import { IntroSection } from "@/components/intro-section"
import { Faq } from "@/components/faq"
import { LongtailFaq } from "@/components/longtail-faq"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"
import { buildLanguageAlternates } from "@/lib/i18n"
import { siteConfig, absoluteUrl } from "@/lib/seo"

// Page-level metadata. The layout sets the site-wide defaults (title template,
// openGraph, twitter, robots); this layer makes the *page* itself authoritative
// for canonical + hreflang, so the home URL is never indexed without its
// 12-language alternate cluster. Values are absolute because Google requires
// fully qualified hreflang targets.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isLocale(lang) ? lang : "en"
  const dict = getDictionary(locale)

  const canonical = absoluteUrl(`/${locale}`)
  const languages = Object.fromEntries(
    Object.entries(buildLanguageAlternates()).map(([code, path]) => [code, absoluteUrl(path)]),
  )

  return {
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    keywords: [...siteConfig.keywords],
    alternates: { canonical, languages },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) {
    notFound()
  }
  const locale = lang as Locale
  const dict = getDictionary(locale)

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <StructuredData lang={locale} dict={dict} />
      <SiteHeader lang={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Features dict={dict} />
        <Showcase dict={dict} />
        <ContentMarquee lang={locale} />
        <ProviderMarquee lang={locale} />
        <ChannelMarquee lang={locale} />
        <Reviews lang={locale} />
        <WhatsAppProof lang={locale} />
        <Pricing dict={dict} lang={locale} />
        <IntroSection lang={locale} />
        <Faq dict={dict} />
        <LongtailFaq lang={locale} />
        <SiteFooter lang={locale} dict={dict} />
      </main>
    </div>
  )
}
