import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { ContentMarquee } from "@/components/content-marquee"
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
    <div className="relative min-h-screen text-foreground">
      {/* Sports background image — fixed, low opacity, behind everything, keeps text readable */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url(/bg-sports.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.13 0.008 60 / 0.82), oklch(0.13 0.008 60 / 0.92))",
        }}
        aria-hidden="true"
      />
      <StructuredData lang={locale} dict={dict} />
      <SiteHeader lang={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Features dict={dict} />
        <Showcase dict={dict} />
        <ContentMarquee lang={locale} />
        <Reviews lang={locale} />
        <WhatsAppProof lang={locale} />
        <Pricing dict={dict} lang={locale} />
        <Faq dict={dict} />
        <SiteFooter lang={locale} dict={dict} />
      </main>
    </div>
  )
}
