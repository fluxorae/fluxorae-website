import { Metadata } from 'next'
import InsightsHero from '@/components/insights/InsightsHero'
import BlogList from '@/components/insights/BlogList'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Stay updated with the latest insights, trends, and thought leadership from Fluxorae. Explore our blog for technology insights and industry expertise.',
}

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <BlogList />
    </>
  )
}
