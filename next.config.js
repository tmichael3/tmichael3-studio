/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'pub-2efb6280d4bb4559a3019d1923351cfb.r2.dev',
      },
    ],
  },
}

module.exports = nextConfig