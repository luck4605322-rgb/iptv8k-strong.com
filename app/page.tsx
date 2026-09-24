"use client"

import { useEffect } from "react"
import { locales, defaultLocale, type Locale } from "@/lib/i18n"

// 静态托管（Cloudflare Pages）下无法使用中间件，因此根路径 `/` 的语言跳转
// 在客户端完成：读取浏览器语言，匹配到支持的语言后跳转，未匹配则用默认语言。
// <noscript> 提供禁用 JS 时的兜底跳转。
function detectLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const lang of preferred) {
    const primary = lang.toLowerCase().split("-")[0]
    const match = locales.find((locale) => locale === primary)
    if (match) return match
  }
  return defaultLocale
}

export default function RootRedirectPage() {
  useEffect(() => {
    window.location.replace(`/${detectLocale()}`)
  }, [])

  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
      </noscript>
      <p style={{ display: "none" }}>Redirecting…</p>
    </>
  )
}
