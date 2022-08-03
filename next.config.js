/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        destination: `http://joylog.co.kr/api/:path*`,
        source: '/api/:path*',
      },
    ];
  },
};

const removeImports = require('next-remove-imports')();

module.exports = removeImports(nextConfig);
