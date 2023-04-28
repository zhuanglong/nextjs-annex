/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true, // https://juejin.cn/post/7137654077743169573
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.js.design',
      },
    ],
  },
};

module.exports = nextConfig;
