'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navOrder = [
  'Home',
  'Services',
  'Solutions',
  'Industries',
  'Insights',
  'Case Studies',
  'Pricing',
  'About',
  'Contact',
]

const navLinks: Record<string, string> = {
  Home: '/',
  Services: '/services',
  Industries: '/industries',
  Insights: '/insights',
  'Case Studies': '/case-studies',
  Pricing: '/pricing',
  About: '/about',
  Contact: '/contact',
}

const solutionIntro = {
  heading: 'Base Technology Stack',
  description:
    'Consulting, data, automation, and AI-ready engineering that brings measurable business outcomes and governance-ready delivery.',
}

const solutionColumns = [
  {
    heading: 'Decision Intelligence',
    links: [
      { name: 'Enterprise AI', href: '/solutions#enterprise-ai' },
      { name: 'AI-Powered Dashboards', href: '/solutions#ai-dashboards' },
      { name: 'Legacy Modernization', href: '/solutions#legacy-modernization' },
    ],
  },
  {
    heading: 'Automation & Experience',
    links: [
      { name: 'Generative AI', href: '/solutions#generative-ai' },
      { name: 'Knowledge Assistants', href: '/solutions#knowledge-assistants' },
      { name: 'Workflow Automation', href: '/solutions#workflow-automation' },
      { name: 'Computer Vision', href: '/solutions#computer-vision' },
    ],
  },
]

const featuredSolution = {
  heading: 'Featured Accelerator',
  description: 'Launch pilots with tracked ROI, compliance guardrails, and executive dashboards.',
  cta: { label: 'Book a Call', href: '/book-call' },
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur-md shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
      <div className="container-custom flex items-center gap-6 py-4 lg:py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/fluxorae-logo.svg" alt="Fluxorae" fill className="object-contain" sizes="40px" priority />
          </div>
          <div className="text-lg font-semibold text-white tracking-tight">Fluxorae</div>
        </Link>

        <nav className="flex-1">
          <ul className="hidden lg:flex items-center justify-center gap-8 text-sm font-semibold tracking-[0.24em] text-secondary">
            {navOrder.map((label) =>
              label === 'Solutions' ? (
                <li key={label} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-accent"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Solutions
                    <span aria-hidden="true">▾</span>
                  </button>
                  <div
                    className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-[780px] -translate-x-1/2 rounded-3xl border border-white/10 bg-primary-dark/95 p-6 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                    role="region"
                    aria-label="Solution families"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase tracking-[0.5em] text-gray-400">{solutionIntro.heading}</h4>
                        <p className="text-sm text-secondary/80">{solutionIntro.description}</p>
                      </div>
                      {solutionColumns.map((column) => (
                        <div key={column.heading} className="space-y-2">
                          <h5 className="text-sm font-semibold text-white">{column.heading}</h5>
                          <ul className="space-y-1 text-sm text-secondary/80">
                            {column.links.map((link) => (
                              <li key={link.name}>
                                <Link href={link.href} className="transition hover:text-white">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-accent/20 to-electric/20 p-4">
                        <h5 className="text-sm font-semibold text-white">{featuredSolution.heading}</h5>
                        <p className="text-sm text-white/80">{featuredSolution.description}</p>
                        <Link
                          href={featuredSolution.cta.href}
                          className="mt-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white"
                        >
                          {featuredSolution.cta.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={label}>
                  <Link
                    href={navLinks[label] ?? '#'}
                    className={`transition-colors duration-200 ${
                      isActive(navLinks[label] ?? '') ? 'text-accent' : 'text-secondary hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <Link href="/book-call" className="btn-primary">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((state) => !state)}
          className="lg:hidden rounded-full border border-white/20 px-3 py-1 text-sm font-semibold uppercase tracking-[0.5em] text-secondary/80"
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary-dark/95">
          <div className="container-custom space-y-4 py-6 text-sm font-semibold uppercase tracking-[0.4em]">
            <ul className="space-y-3">
              {navOrder.map((label) =>
                label === 'Solutions' ? (
                  <li key={label}>
                    <div className="text-white">Solutions</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-gray-300">
                      <div className="space-y-3">
                        <p>{solutionIntro.description}</p>
                        {solutionColumns.map((column) => (
                          <div key={column.heading} className="space-y-1 text-left">
                            <p className="text-white/80">{column.heading}</p>
                            {column.links.map((link) => (
                              <Link key={link.name} href={link.href} className="block text-secondary/80">
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link href={featuredSolution.cta.href} className="inline-flex items-center gap-2 text-accent">
                          {featuredSolution.cta.label}
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={label}>
                    <Link href={navLinks[label] ?? '#'} className="text-secondary/80 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div>
              <Link href="/book-call" className="btn-primary">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
