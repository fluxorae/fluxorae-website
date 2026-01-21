import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fluxorae.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/services/ai-automation',
    '/services/product-engineering',
    '/services/marketing-seo',
    '/services/ui-ux-branding',
    '/services/data-cloud-devops',
    '/solutions',
    '/industries',
    '/insights',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
