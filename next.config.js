/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {appDir: true},
  images: {
    domains: ['magento2.magenteiro.com']
  }
}

module.exports = nextConfig
