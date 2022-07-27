/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: 'http://joylog.co.kr/api',
  },
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
      { destination: `http://joylog.co.kr/api/:path*`, source: '/api/:path*' },
    ];
  },
};

const removeImports = require('next-remove-imports')();

module.exports = removeImports(nextConfig);
