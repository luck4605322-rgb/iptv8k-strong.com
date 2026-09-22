import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactButtons } from "@/components/contact-buttons"
import { contact, whatsappWith } from "@/lib/contact"
import type { Dictionary, Locale } from "@/lib/i18n"

export function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear()
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center lg:p-16">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(50% 80% at 50% 0%, oklch(0.8 0.14 82 / 0.2), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{dict.cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">{dict.cta.paragraph}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="btn-gradient text-base font-semibold">
              <a href={whatsappWith("Hi STRONG 8K, I'd like to start a free trial.")} target="_blank" rel="noopener noreferrer">
                {dict.cta.startTrial}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm font-medium text-muted-foreground">{dict.cta.contact}</p>
          <ContactButtons className="mt-4" />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <Link href={`/${lang}`} className="flex items-center gap-2" aria-label={dict.nav.home}>
            <Image src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7" />
            <span className="font-display text-lg font-bold tracking-wide">
              STRONG <span className="text-primary">8K</span>
            </span>
          </Link>
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            aria-label="Footer navigation"
          >
            <a href="#features" className="hover:text-foreground">
              {dict.footer.features}
            </a>
            <a href="#pricing" className="hover:text-foreground">
              {dict.footer.pricing}
            </a>
            <a href="#faq" className="hover:text-foreground">
              {dict.footer.faq}
            </a>
            <a href="#" className="hover:text-foreground">
              {dict.footer.privacy}
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">© {year} STRONG 8K. {dict.footer.rights}</p>
        </div>
      </footer>
    </>
  )
}
