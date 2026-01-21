import { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Product & Web Development',
  description: 'High-performance web and product engineering with design systems, observability, and weekly shipping cadence.',
}

const data = {
  title: 'Product & Web Development',
  subtitle: 'Next.js • Design systems • APIs',
  description: 'Build fast, resilient web and product experiences with a design system backbone, CI/CD, and observability. Performance, accessibility, and SEO are baked in.',
  primaryCTA: { text: 'Book a Free Consultation', href: '/contact' },
  secondaryCTA: { text: 'View Work', href: '/solutions' },
  painPoints: [
    'Slow pages and poor Core Web Vitals hurt conversions.',
    'Inconsistent UI/UX and scattered design tokens.',
    'Ship velocity is low; releases are risky without tests.',
    'Limited observability and weak SEO foundations.',
  ],
  solutions: [
    'Next.js apps with edge caching and optimized assets.',
    'Design systems with tokens, components, and governance.',
    'CI/CD with tests, preview environments, and rollback safety.',
    'Instrumentation for performance, errors, and SEO health.',
  ],
  outcomes: [
    'LCP/INP improvements targeting <2.5s',
    'Consistent UI across teams with reusable components',
    'Weekly shipping cadence with safer releases',
    'SEO and accessibility uplift baked into the stack',
  ],
  process: [
    { title: 'Assess & plan', description: 'Audit performance, UX, and codebase; define OKRs and success metrics.' },
    { title: 'Design system', description: 'Set tokens, components, and accessibility patterns for scale.' },
    { title: 'Build & integrate', description: 'Develop features, APIs, and integrations with observability and tests.' },
    { title: 'Harden & launch', description: 'Optimize CWV, add monitoring, and launch behind feature flags.' },
    { title: 'Iterate & grow', description: 'Continuous improvements with CRO and backlog of experiments.' },
  ],
  stack: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Prisma', 'Postgres', 'Vercel', 'Playwright', 'Storybook'],
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
