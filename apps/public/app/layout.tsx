import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { SpeedInsights } from '@vercel/speed-insights/next'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
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
  description: 'Fluxorae is an AI-native digital engineering partner delivering product builds, automation, data platforms, and growth that converts—securely and fast.',
  keywords: ['Fluxorae', 'AI automation', 'digital engineering', 'product development', 'SEO', 'enterprise technology'],
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
    title: 'Fluxorae - AI-Native Digital Engineering & Growth',
    description: 'Product engineering, AI automation, data, and growth teams shipping outcomes in weeks.',
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
    title: 'Fluxorae - AI-Native Digital Engineering & Growth',
    description: 'Product engineering, AI automation, data, and growth teams shipping outcomes in weeks.',
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
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LNPJW8QJZH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LNPJW8QJZH');
            `,
          }}
        />
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
      <body className={`${manrope.className} bg-primary text-secondary antialiased`}>
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
