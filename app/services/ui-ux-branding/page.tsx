import { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'UI/UX & Branding',
  description: 'Research-driven design systems, brand identity, and motion that build trust and convert.',
}

const data = {
  title: 'UI/UX & Branding',
  subtitle: 'Design systems • Product UX • Brand',
  description: 'Build a unified brand and product experience with research-driven UX, design systems, and motion. Performance and accessibility are non-negotiable.',
  primaryCTA: { text: 'Book a Design Review', href: '/contact' },
  secondaryCTA: { text: 'View Portfolio', href: '/solutions' },
  painPoints: [
    'Inconsistent visuals and UX reduce trust and conversions.',
    'No design system; teams duplicate components and tokens.',
    'Product flows are unclear; onboarding and pricing leak users.',
    'Brand story and messaging are not differentiated.',
  ],
  solutions: [
    'Discovery, user flows, and IA to clarify journeys and reduce drop-offs.',
    'Design systems with tokens, components, and documentation.',
    'Brand identity, messaging, and motion that signal quality.',
    'Prototypes and usability tests to validate before build.',
  ],
  outcomes: [
    'Higher trust and conversion on critical flows',
    'Faster build velocity with governed components',
    'Clear differentiation and consistent storytelling',
    'Reduced design-debt and smoother handoffs to engineering',
  ],
  process: [
    { title: 'Discover', description: 'Research, audits, and journey mapping to find friction and opportunities.' },
    { title: 'Define', description: 'Set brand narrative, tone, and design principles; plan the system.' },
    { title: 'Design', description: 'Craft UI, motion, and design system assets; validate with users.' },
    { title: 'Deliver', description: 'Document tokens/components and hand off to engineering with QA.' },
    { title: 'Optimize', description: 'CRO and UX experiments to keep improving key journeys.' },
  ],
  stack: ['Figma', 'Lottie', 'Design Tokens', 'Storybook', 'Next.js', 'Tailwind', 'shadcn/ui', 'Playwright'],
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
