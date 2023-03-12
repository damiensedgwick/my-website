/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dev.to'],
  },
};

module.exports = nextConfig;
