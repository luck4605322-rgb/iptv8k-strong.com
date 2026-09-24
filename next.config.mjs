/** @type {import('next').NextConfig} */
const nextConfig = {
  // 注意：本项目使用了中间件 (proxy.ts) 做多语言跳转 (/ -> /en)，
  // 中间件与 `output: 'export'` 静态导出不兼容，会导致根路径 404、预览无法显示。
  // 因此以 Node 服务方式运行（宝塔面板用 `npm run build` + `npm start` / PM2）。
  images: {
    unoptimized: true,
  },
}

export default nextConfig
