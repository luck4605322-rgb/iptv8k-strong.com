import { notFound } from "next/navigation"
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
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

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
        <Faq dict={dict} />
        <SiteFooter lang={locale} dict={dict} />
      </main>
    </div>
  )
}
