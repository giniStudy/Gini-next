/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: 'https://api.joylog.co.kr/',
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
};

const removeImports = require('next-remove-imports')();

module.exports = removeImports(nextConfig);
