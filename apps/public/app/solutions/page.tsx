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
      <CTA
        primaryButton={{ text: 'Book a Call', href: '/book-call' }}
        secondaryButton={{ text: 'View Case Studies', href: '/case-studies' }}
        title="Need the right solution family?"
        description="Share your challenge and we will align you to the right AI systems, workflows, and accelerators."
        showContactDetails
      />
    </>
  )
}
