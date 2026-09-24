import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

// 静态导出 (output: export) 要求元数据路由声明为静态生成。
export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortTitle,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#171410",
    theme_color: "#171410",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-3d.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["entertainment", "multimedia", "streaming"],
  }
}
