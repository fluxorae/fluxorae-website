import { Metadata } from 'next'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import SolutionsShowcase from '@/components/solutions/SolutionsShowcase'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Innovative technology solutions designed to solve complex business challenges. Discover how Fluxorae can transform your business.',
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsShowcase />
      <CTA />
    </>
  )
}
