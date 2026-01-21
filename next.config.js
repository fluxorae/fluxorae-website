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
      // Keep ops dashboard and health endpoint on .in (no-op redirects)
      {
        source: '/ops',
        has: [{ type: 'host', value: 'fluxorae.in' }],
        destination: '/ops',
        permanent: false,
      },
      {
        source: '/api/health',
        has: [{ type: 'host', value: 'fluxorae.in' }],
        destination: '/api/health',
        permanent: false,
      },

      // Redirect everything else from fluxorae.in to fluxorae.com
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
    ];
  },
};

module.exports = nextConfig;
