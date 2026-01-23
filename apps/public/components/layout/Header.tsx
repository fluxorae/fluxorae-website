"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react'

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const serviceColumns = [
  {
    title: 'Core services',
    description: 'Delivery pods for product, data, automation, and growth.',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Industries', href: '/industries' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Case studies',
    description: 'Recent rollouts with local SEO and performance-first builds.',
    links: [
      { name: 'Index', href: '/case-studies' },
      { name: 'The Rented Runway', href: '/case-study-rented-runway' },
      { name: 'RK Petals & Decor', href: '/case-study-rk-petals' },
    ],
  },
  {
    title: 'Resources',
    description: 'Signals, templates, and ways to reach us.',
    links: [
      { name: 'Insights', href: '/insights' },
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement | null>(null)

  const navItems = useMemo(() => primaryLinks, [])
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen || !drawerRef.current) return
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>('a, button')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
      if (e.key === 'Tab' && focusable.length) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isMobileMenuOpen, closeMenu])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image src="/fluxorae-logo.svg" alt="Fluxorae" fill className="object-contain drop-shadow" sizes="40px" priority />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">Fluxorae</span>
              <span className="ml-1 text-xs text-accent font-medium bg-white/5 rounded-full px-1.5 py-0.5">AI</span>
            </div>
          </Link>

          <DesktopNav navItems={navItems} pathname={pathname} />

          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/contact" className="btn-secondary flex items-center gap-2">
              <PhoneCall size={18} />
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="lg:hidden p-2 text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <MobileDrawer open={isMobileMenuOpen} pathname={pathname} navItems={navItems} onClose={closeMenu} drawerRef={drawerRef} />
    </header>
  )
}

function DesktopNav({ navItems, pathname }: { navItems: typeof primaryLinks; pathname: string }) {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => {
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
        <button className="flex items-center gap-1 text-secondary hover:text-accent font-medium transition" aria-haspopup="true">
          Solutions <ChevronDown size={16} />
        </button>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-3 w-[760px] bg-primary-dark/95 border border-white/10 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] p-6">
          <div className="grid grid-cols-3 gap-5">
            {serviceColumns.map((col) => (
              <div key={col.title} className="rounded-xl bg-white/5 border border-white/5 p-4">
                <h4 className="text-white font-semibold mb-1 text-sm">{col.title}</h4>
                <p className="text-secondary/70 text-xs mb-3">{col.description}</p>
                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="inline-flex items-center justify-between rounded-lg px-3 py-2 text-sm text-secondary/90 hover:text-accent hover:bg-white/5 transition"
                    >
                      {link.name}
                      <ChevronDown size={12} className="rotate-[-90deg]" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileDrawer({
  open,
  pathname,
  navItems,
  onClose,
  drawerRef,
}: {
  open: boolean
  pathname: string
  navItems: typeof primaryLinks
  onClose: () => void
  drawerRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-primary-dark/95 border-l border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div className="text-white font-semibold">Menu</div>
              <button onClick={onClose} className="text-secondary hover:text-accent" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                      isActive ? 'bg-accent text-white' : 'text-secondary hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <div className="w-full text-left px-4 py-3 font-semibold text-white bg-white/5">Solutions & Resources</div>
                <div className="bg-primary/80 divide-y divide-white/5">
                  {serviceColumns.flatMap((col) =>
                    col.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className="block px-4 py-2 text-secondary hover:text-accent transition"
                      >
                        {link.name}
                      </Link>
                    )),
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/10 space-y-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center px-4 py-3 rounded-lg font-semibold bg-accent text-white hover:opacity-90 transition"
              >
                Book a Call
              </Link>
              <Link
                href="tel:+91XXXXXXX"
                className="block w-full text-center px-4 py-3 rounded-lg font-semibold border border-white/15 text-white hover:bg-white/5 transition"
              >
                Call us
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
