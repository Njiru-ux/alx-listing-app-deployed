/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' } // tighten to specific domains when you know them
    ]
  }
};
module.exports = nextConfig;
