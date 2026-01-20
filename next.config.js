/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fluxorae.in',
          },
        ],
        destination: 'https://fluxorae.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fluxorae.in',
          },
        ],
        destination: 'https://www.fluxorae.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
