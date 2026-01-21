import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fluxorae.com'
const alternates = {
  canonical: '/',
  languages: {
    'en-US': 'https://fluxorae.com',
    'en-IN': 'https://fluxorae.in',
    'x-default': 'https://fluxorae.com',
  },
}

export const metadata: Metadata = {
  title: {
    default: 'Fluxorae Private Limited - Global Technology Solutions',
    template: '%s | Fluxorae',
  },
  description: 'Fluxorae Private Limited - Global leader in Software Installation & Technology Services. Empowering businesses worldwide with cutting-edge technology.',
  keywords: ['Fluxorae', 'Technology Solutions', 'Digital Transformation', 'Innovation', 'Enterprise Solutions', 'Global Technology'],
  authors: [{ name: 'Fluxorae' }],
  creator: 'Fluxorae',
  publisher: 'Fluxorae',
  metadataBase: new URL(baseUrl),
  alternates,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Fluxorae',
    title: 'Fluxorae - Global Technology Solutions & Innovation',
    description: 'Fluxorae - A global leader in technology solutions, innovation, and digital transformation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fluxorae',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fluxorae - Global Technology Solutions & Innovation',
    description: 'Fluxorae - A global leader in technology solutions, innovation, and digital transformation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fluxorae Private Limited',
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: 'Global leader in Software Installation & Technology Services',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Gata No. 316, Sahinwan, Gosaisinghpur, Kadipur',
                addressLocality: 'Sultanpur',
                addressRegion: 'Uttar Pradesh',
                postalCode: '228131',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9115377791',
                contactType: 'customer service',
                email: 'contact@fluxorae.com',
              },
              sameAs: [
                'https://linkedin.com/company/fluxorae',
                'https://twitter.com/fluxorae',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  )
}
