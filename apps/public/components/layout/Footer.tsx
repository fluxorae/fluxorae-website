import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Insights', href: '/insights' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Cookies Policy', href: '/cookies-policy' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/fluxorae' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/fluxorae' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/fluxorae' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/fluxorae' },
]

const sitemapSummary = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'Pricing', href: '/pricing' },
]

const trustBadges = ['GDPR Compliant', 'ISO 27001', 'SOC 2 Type II', 'Cloud Security', 'Audit Ready', 'NDA Friendly']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white border-t border-white/5">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11">
                <Image
                  src="/fluxorae-logo.svg"
                  alt="Fluxorae logo"
                  fill
                  className="object-contain drop-shadow"
                  sizes="44px"
                  loading="lazy"
                />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                Fluxorae
              </span>
            </Link>
            <div className="space-y-6 mb-8">
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                FLUXORAE PRIVATE LIMITED is a global leader in Software Installation & Technology Services, empowering businesses through innovation and digital transformation.
              </p>
              <div className="space-y-1 text-xs text-gray-500 uppercase tracking-widest">
                <p>CIN: U62091UP2025PTC234934</p>
                <p>GSTIN: 09AAGCF6673D1ZG</p>
              </div>
            </div>
            <div className="space-y-4">
              <a href="mailto:contact@fluxorae.com" className="flex items-center space-x-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">contact@fluxorae.com</span>
              </a>
              <a href="https://wa.me/919115377791" className="flex items-center space-x-3 text-gray-400 hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">+91 9115377791</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-200 mb-1">Registered Office</p>
                  <p>Gata No. 316, Sahinwan, Gosaisinghpur,</p>
                  <p>Kadipur, Sultanpur, UP - 228131</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:pt-4">
            <h3 className="font-bold text-lg mb-6 text-gray-100">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:pt-4">
            <h3 className="font-bold text-lg mb-6 text-gray-100">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:pt-4">
            <h3 className="font-bold text-lg mb-6 text-gray-100">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-r from-accent to-electric-soft px-6 py-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-3">Need a roadmap?</p>
            <h3 className="text-2xl font-semibold mb-2">Book a Call</h3>
            <p className="text-sm text-white/80 mb-4">
              Free AI consultation, project brief intake, and rapid alignment on KPIs, budget, and timeline.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-primary shadow-lg shadow-black/30"
            >
              Book a Call
            </Link>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h4 className="font-semibold text-white mb-3">Sitemap</h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              {sitemapSummary.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-accent hover:text-accent transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h4 className="font-semibold text-white mb-3">Trust & certifications</h4>
            <p className="text-sm text-gray-400 mb-4">
              Security, compliance, and governance are built into every engagement—global teams, transparent reporting, and audit-ready SLA commitments.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-300">
              {trustBadges.map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-400">
          {trustBadges.slice(0, 4).map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} <span className="text-white font-medium">Fluxorae Private Limited</span>. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">
                Software Installation & Technology Services
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


