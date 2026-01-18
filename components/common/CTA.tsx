'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  title?: string
  description?: string
  primaryButton?: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
}

export default function CTA({
  title = 'Ready to Transform Your Business?',
  description = 'Let\'s discuss how Fluxorae can help you achieve your goals with innovative technology solutions.',
  primaryButton = { text: 'Get Started', href: '/contact' },
  secondaryButton = { text: 'Learn More', href: '/about' },
}: CTAProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-2 mb-6 text-white">{title}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryButton.href} className="btn-primary bg-accent hover:bg-accent-dark group">
              {primaryButton.text}
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
