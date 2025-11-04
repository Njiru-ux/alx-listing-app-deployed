/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // <- forces the browser to load the URL directly
};
module.exports = nextConfig;
