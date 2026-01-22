import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../Layout/Container'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Case studies', to: '/case-study' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact', to: '/#contact' },
]

const CTA_LINK = { label: 'Book a consult', to: '/case-study/the-rented-runway#contact' }

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const drawerRef = useRef(null)

  useLockBodyScroll(isMenuOpen)

  const navItems = useMemo(() => NAV_ITEMS, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location.pathname, location.hash, closeMenu])

  useEffect(() => {
    if (!isMenuOpen || !drawerRef.current) return undefined

    const drawerEl = drawerRef.current
    const focusable = drawerEl.querySelectorAll('a, button, input, select, textarea')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (first) first.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }

      if (event.key === 'Tab' && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const isActive = useCallback(
    (target) => {
      const [targetPath] = target.split('#')
      if (targetPath === '/case-study') {
        return location.pathname.startsWith('/case-study')
      }
      return location.pathname === targetPath
    },
    [location.pathname],
  )

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <Container>
        <div className={styles.bar}>
          <Link to="/" className={styles.brand} aria-label="Fluxorae home">
            <span className={styles.brandMark} aria-hidden="true">
              <img src="/fluxorae-logo.svg" alt="Fluxorae" loading="lazy" width="28" height="28" />
            </span>
            <span className={styles.brandName}>
              Fluxorae
              <span className={styles.badge}>AI-native</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`${styles.navLink} ${isActive(item.to) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link to={CTA_LINK.to} className={styles.primary}>
              {CTA_LINK.label}
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer"
            onClick={toggleMenu}
          >
            <span aria-hidden="true">{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </Container>

      <div
        className={`${styles.drawerOverlay} ${isMenuOpen ? styles.drawerOverlayOpen : ''}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside
        id="mobile-drawer"
        ref={drawerRef}
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.drawerHead}>
          <div className={styles.drawerTitle}>Menu</div>
          <button type="button" className={styles.secondary} onClick={closeMenu} aria-label="Close menu">
            Close
          </button>
        </div>
        <div className={styles.drawerNav}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={closeMenu}
              className={`${styles.drawerLink} ${isActive(item.to) ? styles.drawerLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.drawerActions}>
          <Link to={CTA_LINK.to} className={styles.primary} onClick={closeMenu}>
            {CTA_LINK.label}
          </Link>
          <a className={styles.secondary} href="mailto:contact@fluxorae.com">
            contact@fluxorae.com
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Header
