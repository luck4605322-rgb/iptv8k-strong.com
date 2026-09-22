import { NextResponse, type NextRequest } from "next/server"
import { locales, defaultLocale } from "@/lib/i18n"

// Picks the best matching locale from the Accept-Language header.
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language")
  if (!header) return defaultLocale

  const accepted = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=")
      return { tag: tag.toLowerCase(), q: q ? Number.parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of accepted) {
    const base = tag.split("-")[0]
    const match = locales.find((l) => l === base)
    if (match) return match
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Already prefixed with a supported locale — let it through.
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return NextResponse.next()

  // Redirect the bare root (and any non-prefixed path) to the detected locale.
  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, API routes, and any file with an extension
  // (sitemap.xml, robots.txt, images, icons, manifest, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
