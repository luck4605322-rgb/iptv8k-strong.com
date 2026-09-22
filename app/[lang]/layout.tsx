import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Oswald, Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/seo"
import { AnimatedBackground } from "@/components/animated-background"
import {
  locales,
  defaultLocale,
  isLocale,
  getDictionary,
  ogLocaleMap,
  buildLanguageAlternates,
  type Locale,
} from "@/lib/i18n"
import "../globals.css"

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isLocale(lang) ? lang : defaultLocale
  const dict = getDictionary(locale)
  const canonical = `/${locale}`

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [...siteConfig.keywords],
    applicationName: siteConfig.name,
    generator: "v0.app",
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "entertainment",
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      url: canonical,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Premium European IPTV subscription and reseller panel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    // Replace with your real verification token from Google Search Console.
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#171410" },
    { media: "(prefers-color-scheme: dark)", color: "#171410" },
  ],
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang)) {
    notFound()
  }

  return (
    <html lang={lang} className={`dark bg-background ${oswald.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <AnimatedBackground />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
