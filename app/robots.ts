import type { MetadataRoute } from "next"
import { absoluteUrl, siteConfig } from "@/lib/seo"

// 静态导出 (output: export) 要求元数据路由声明为静态生成。
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    // Must stay in sync with app/sitemap.ts (root + 12 locale home pages).
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.siteUrl,
  }
}
