/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()',
      'camera=()',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'payment=()',
      'usb=()',
    ].join(', '),
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
      "style-src 'self' 'unsafe-inline' https:",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
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
