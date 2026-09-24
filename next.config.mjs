/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，用于 Cloudflare Pages 等纯静态托管。
  // 语言跳转 (/ -> /en 等) 改由客户端首页 app/page.tsx 的浏览器语言检测完成，
  // 因此不再使用中间件 (proxy.ts)——中间件与 `output: 'export'` 不兼容。
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
