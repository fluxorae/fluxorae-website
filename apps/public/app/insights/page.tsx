import { Metadata } from 'next'
import InsightsHero from '@/components/insights/InsightsHero'
import BlogList from '@/components/insights/BlogList'
import InsightsHubGrid from '@/components/insights/InsightsHubGrid'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Stay updated with the latest insights, trends, and thought leadership from Fluxorae. Explore our blog for technology insights and industry expertise.',
}

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsHubGrid />
      <BlogList />
      <CTA
        title="Want to discuss an insight?"
        description="Book a call to explore how these ideas can be applied to your roadmap."
        primaryButton={{ text: 'Book a Call', href: '/book-call' }}
        secondaryButton={{ text: 'View Services', href: '/services' }}
      />
    </>
  )
}
