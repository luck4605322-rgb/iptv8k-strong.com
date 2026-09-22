"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Check, ChevronDown } from "lucide-react"
import { locales, localeMeta, isLocale, defaultLocale, type Locale } from "@/lib/i18n"

export function LanguageSwitcher({
  lang,
  label = "Select language",
  className = "",
}: {
  lang: Locale
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Swap the leading locale segment while preserving the rest of the path.
  function localizedHref(target: Locale) {
    const segments = (pathname || "/").split("/")
    if (segments.length > 1 && isLocale(segments[1])) {
      segments[1] = target
    } else {
      return `/${target}`
    }
    const joined = segments.join("/")
    return joined || `/${target}`
  }

  const current = localeMeta[lang] ?? localeMeta[defaultLocale]

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-secondary/50 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
      >
        <Globe className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline">{current.flag}</span>
        <span>{lang.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 z-50 mt-2 max-h-80 w-52 overflow-auto rounded-lg border border-border/60 bg-popover p-1 shadow-xl"
        >
          {locales.map((code) => {
            const active = code === lang
            const meta = localeMeta[code]
            return (
              <li key={code} role="option" aria-selected={active}>
                <Link
                  href={localizedHref(code)}
                  hrefLang={code}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    active ? "bg-primary/10 text-primary" : "text-popover-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="text-base leading-none">{meta.flag}</span>
                  <span className="flex-1">{meta.label}</span>
                  {active && <Check className="h-4 w-4" />}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
