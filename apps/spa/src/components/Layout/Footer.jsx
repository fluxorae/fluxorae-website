import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Footer.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Case studies', to: '/case-study' },
  { label: 'Rented Runway', to: '/case-study/the-rented-runway' },
  { label: 'Contact', to: 'mailto:contact@fluxorae.com', external: true },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              <img src="/fluxorae-logo.svg" alt="Fluxorae logo" loading="lazy" width="28" height="28" />
            </span>
            <div className={styles.brandCopy}>
              <div className={styles.brandTitle}>Fluxorae</div>
              <p>AI-native digital engineering partner.</p>
            </div>
          </div>
          <div className={styles.links}>
            {links.map((link) =>
              link.external ? (
                <a key={link.label} className={styles.link} href={link.to}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className={styles.meta}>
          <span>Made for performance, accessibility, and SEO-first routing.</span>
          <span>
            <strong>Contact:</strong> contact@fluxorae.com
          </span>
        </div>
      </Container>
    </footer>
  )
}
