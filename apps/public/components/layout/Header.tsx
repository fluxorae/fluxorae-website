'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react'

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
]

const serviceColumns = [
  {
    title: 'Core',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Industries', href: '/industries' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Insights', href: '/insights' },
      { name: 'Case Study: Rented Runway', href: '/case-study-rented-runway' },
      { name: 'Case Study: RK Petals', href: '/case-study-rk-petals' },
      { name: 'Careers', href: '/careers' },
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/fluxorae-logo.svg"
                alt="Fluxorae"
                fill
                className="object-contain drop-shadow"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                Fluxorae
              </span>
              <span className="ml-1 text-xs text-accent font-medium bg-white/5 rounded-full px-1.5 py-0.5">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {primaryLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <div className="relative group">
              <button className="flex items-center gap-1 text-secondary hover:text-accent font-medium transition">
                Solutions <ChevronDown size={16} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-3 w-[540px] bg-primary-dark/95 border border-white/10 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] p-5">
                <div className="grid grid-cols-2 gap-4">
                  {serviceColumns.map((col) => (
                    <div key={col.title}>
                      <h4 className="text-white font-semibold mb-2 text-sm">{col.title}</h4>
                      <div className="flex flex-col gap-2">
                        {col.links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="text-secondary/85 hover:text-accent transition text-sm"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/contact" className="btn-secondary flex items-center gap-2">
              <PhoneCall size={18} />
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/90 border-t border-white/10 backdrop-blur"
          >
            <div className="container-custom py-4 space-y-2">
              {primaryLinks.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive ? 'bg-accent text-white' : 'text-secondary hover:bg-primary-light/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <button className="w-full text-left px-4 py-3 font-semibold text-white bg-white/5">Solutions & Resources</button>
                <div className="bg-primary/80">
                  {serviceColumns.flatMap((col) =>
                    col.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-secondary hover:text-accent transition"
                      >
                        {link.name}
                      </Link>
                    )),
                  )}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg font-semibold text-center bg-accent text-white hover:opacity-90 transition"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
