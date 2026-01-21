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
    const inHosts = ['fluxorae.in', 'www.fluxorae.in'];
    const indiaMode = process.env.INDIA_SITE_MODE || 'redirect'; // redirect | site

    // When running the India site as an independent experience, skip redirects.
    if (indiaMode !== 'redirect') return [];

    return [
      // Keep ops dashboard and health endpoint on .in (no-op redirects)
      ...['/ops', '/api/health'].flatMap((path) =>
        inHosts.map((host) => ({
          source: path,
          has: [{ type: 'host', value: host }],
          destination: path,
          permanent: false,
        })),
      ),

      // Redirect everything else from fluxorae.in to fluxorae.com
      ...inHosts.map((host) => ({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: 'https://fluxorae.com/:path*',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
