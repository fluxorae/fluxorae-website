'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Megaphone, Palette, DatabaseZap, CloudCog, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bot,
    title: 'AI & Automation',
    problem: 'Manual processes slow teams and create inconsistent customer experiences.',
    solution: 'Design and deploy copilots, workflow automation, and data agents tuned to your stack.',
    outcomes: ['-30% ops time in 8 weeks', 'Human-in-loop safety', 'Secure model routing'],
    stack: ['OpenAI/Anthropic', 'LangChain', 'Vercel AI', 'Airflow'],
    color: 'from-emerald-400/80 via-accent to-purple-600',
    href: '/services/ai-automation',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    problem: 'Legacy web/mobile experiences miss performance and conversion targets.',
    solution: 'Ship Next.js apps, design systems, and APIs with CI/CD and observability baked in.',
    outcomes: ['LCP < 2.5s', 'Design system governance', 'Weekly shipping cadence'],
    stack: ['Next.js', 'TypeScript', 'shadcn/ui', 'Prisma'],
    color: 'from-sky-400 to-cyan-500',
    href: '/services/product-engineering',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing / SEO',
    problem: 'Underperforming acquisition and unclear attribution across channels.',
    solution: 'Technical SEO, CRO, performance ads, and analytics with experimentation loops.',
    outcomes: ['+40% organic demos', 'CRO playbooks', 'Attribution clarity'],
    stack: ['GA4', 'Search Console', 'Tag Manager', 'Looker/Data Studio'],
    color: 'from-orange-400 to-amber-500',
    href: '/services/marketing-seo',
  },
  {
    icon: Palette,
    title: 'UI/UX & Branding',
    problem: 'Disjointed visuals and UX create drop-offs and weak brand recall.',
    solution: 'Research, brand identity, interaction design, and motion built into components.',
    outcomes: ['Higher trust & clarity', 'Consistent design tokens', 'Faster build velocity'],
    stack: ['Figma', 'Lottie', 'Design Tokens', 'Storybook'],
    color: 'from-pink-500 to-rose-500',
    href: '/services/ui-ux-branding',
  },
  {
    icon: DatabaseZap,
    title: 'Data & Analytics',
    problem: 'Fragmented data and slow insight cycles block decisions.',
    solution: 'Customer 360, dashboards, predictive models, and data contracts with governance.',
    outcomes: ['Live metrics dashboards', 'Predictive scoring', 'Data quality SLAs'],
    stack: ['dbt', 'BigQuery/Postgres', 'Metabase', 'Python'],
    color: 'from-blue-500 to-indigo-500',
    href: '/services/data-cloud-devops',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    problem: 'Unreliable infra, rising costs, and slow releases.',
    solution: 'Cloud modernization, SRE, FinOps, and secure pipelines with clear runbooks.',
    outcomes: ['99.9%+ uptime targets', 'Cost visibility', 'Incident-ready playbooks'],
    stack: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    color: 'from-teal-400 to-emerald-500',
    href: '/services/data-cloud-devops',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="heading-3 text-xl">{service.title}</h3>
                <div className="space-y-3 text-sm text-gray-200">
                  <p className="flex gap-2">
                    <span className="text-white font-semibold">Problem:</span> {service.problem}
                  </p>
                  <p className="flex gap-2">
                    <span className="text-white font-semibold">Solution:</span> {service.solution}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Expected outcomes</p>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center text-sm text-white">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.stack.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="text-accent font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    View service
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
