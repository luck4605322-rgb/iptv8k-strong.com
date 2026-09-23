"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { whatsappWith } from "@/lib/contact"
import type { Dictionary, Locale } from "@/lib/i18n"

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: dict.nav.features, href: "#features" },
    { label: dict.nav.content, href: "#content" },
    { label: dict.nav.pricing, href: "#pricing" },
    { label: dict.nav.faq, href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} aria-label={dict.nav.home}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher lang={lang} label={dict.nav.selectLanguage} />
          <Button asChild className="btn-gradient text-sm font-semibold">
            <a href={whatsappWith("Hi STRONG 8K, I'd like to subscribe.")} target="_blank" rel="noopener noreferrer">
              {dict.nav.subscribe}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={dict.nav.selectLanguage} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild className="btn-gradient font-semibold">
                <a href={whatsappWith("Hi STRONG 8K, I'd like to subscribe.")} target="_blank" rel="noopener noreferrer">
                  {dict.nav.subscribe}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
