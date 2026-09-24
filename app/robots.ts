import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

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
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
