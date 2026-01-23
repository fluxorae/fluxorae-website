'use client'

import { useEffect, useState } from 'react'

type Props = {
  tocItems: string[]
}

export default function TocClient({ tocItems }: Props) {
  const [active, setActive] = useState(tocItems[0] ?? '')

  useEffect(() => {
    const sections = tocItems
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const onScroll = () => {
      const fromTop = window.scrollY + 120
      let current = sections[0]?.id ?? tocItems[0]
      for (const section of sections) {
        if (section.offsetTop <= fromTop) current = section.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [tocItems])

  return (
    <nav
      className="bg-primary-dark/60 border border-white/10 rounded-2xl p-4 shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
      aria-label="Table of contents"
    >
      <h3 className="text-white font-semibold mb-2">Table of Contents</h3>
      <div className="flex flex-col gap-1 text-sm">
        {tocItems.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-secondary/80 hover:text-accent transition ${active === id ? 'text-accent font-semibold' : ''}`}
          >
            {label(id)}
          </a>
        ))}
      </div>
    </nav>
  )
}

function label(id: string) {
  const labels: Record<string, string> = {
    snapshot: 'Client Snapshot',
    problem: 'Problem',
    goals: 'Targeted Outcomes',
    strategy: 'Strategy',
    content: 'Content & UX',
    seo: 'SEO Implementation',
    performance: 'Performance & Accessibility',
    results: 'Results',
    screens: 'Screenshots',
    timeline: 'Timeline',
    deliverables: 'Deliverables',
    faq: 'FAQ',
    contact: 'CTA',
    'hidden-plan': 'SEO Plan',
  }
  return labels[id] ?? id
}
