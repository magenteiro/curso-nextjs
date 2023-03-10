/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
    reactStrictMode: true,
    images: {
        domains: ['i.imgur.com'],
    }
}

module.exports = nextConfig
