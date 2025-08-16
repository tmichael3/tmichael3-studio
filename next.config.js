/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    // No remote patterns needed - using local placeholders for development
  },
}

module.exports = nextConfig