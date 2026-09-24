/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启静态导出
  images: {
    unoptimized: true, // 禁用 Next.js 图片优化服务，避免静态导出报错
  },
};

export default nextConfig;
