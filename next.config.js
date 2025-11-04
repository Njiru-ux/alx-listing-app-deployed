/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    // Ensure proper transpilation
    removeConsole: false,
  },
  swcMinify: true,
}

module.exports = nextConfig
