/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.to',
        port: '',
        pathname: '/social_previews/article/**',
      },
      ],
  }
};
