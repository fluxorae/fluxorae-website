import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'
import Seo from '../../components/Seo'
import styles from './Home.module.css'
import { caseStudies } from '../../data/caseStudies'

const serviceItems = [
  {
    title: 'AI products & UX',
    summary: 'Ship AI-driven experiences with semantic search, RAG, and task-specific copilots.',
  },
  {
    title: 'Automation & ops',
    summary: 'Workflow automation, back-office tooling, and analytics to reduce manual effort.',
  },
  {
    title: 'Data & performance',
    summary: 'Event pipelines, dashboards, and performance budgets tuned for Core Web Vitals.',
  },
  {
    title: 'Growth & SEO',
    summary: 'Technical SEO, structured data, and content systems that keep pages fast.',
  },
]

const heroPoints = [
  'React 18 + Vite setup with code-split routes',
  'Accessible, keyboard-friendly navigation',
  'SEO-first routing with lazy-loaded assets',
]

const heroMetrics = [
  { label: 'Launch window', value: '6-8 weeks' },
  { label: 'Engagement', value: 'CTA-first layouts' },
  { label: 'Performance', value: 'Lean, lazy-loaded assets' },
]

export default function Home() {
  const featuredStudies = useMemo(() => caseStudies.slice(0, 2), [])

  return (
    <>
      <Seo
        title="Fluxorae"
        description="AI-native digital engineering partner delivering product, automation, data, and growth outcomes."
      />

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroBadge}>AI-native delivery</span>
              <h1 className={styles.heroTitle}>Ship faster with an engineering team built for performance and SEO.</h1>
              <p className={styles.heroLead}>
                We translate Figma, screenshots, or existing HTML into production-ready React with mobile-stable headers,
                lazy routes, and clean architecture.
              </p>
              <ul className={styles.heroBullets}>
                {heroPoints.map((point) => (
                  <li key={point}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className={styles.heroCtas}>
                <Link className={styles.primaryButton} to="/case-study">
                  View case studies
                </Link>
                <Link className={styles.secondaryButton} to="/case-study/the-rented-runway">
                  Explore a detail page
                </Link>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="Engagement metrics">
              <div className={styles.panelHeader}>
                <span>Delivery control room</span>
                <span>Live</span>
              </div>
              <div className={styles.metrics}>
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className={styles.metricCard}>
                    <div className={styles.metricLabel}>{metric.label}</div>
                    <div className={styles.metricValue}>{metric.value}</div>
                  </div>
                ))}
              </div>
              <p className={styles.sectionDescription}>
                Ops-ready React router setup with scroll-locked mobile drawer, focus traps, and suspense-driven routes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.services} id="services">
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Outcomes-first services</h2>
              <p className={styles.sectionDescription}>
                Built for teams that need clean routes, strong SEO baselines, and interfaces that stay sharp on mobile.
              </p>
            </div>
          </div>
          <div className={styles.serviceGrid}>
            {serviceItems.map((item) => (
              <div key={item.title} className={styles.serviceCard}>
                <span className={styles.serviceTag}>Included</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.caseStudiesSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured case studies</h2>
              <p className={styles.sectionDescription}>
                Real-world rollouts with lean stacks, structured data, and careful mobile behaviour.
              </p>
            </div>
            <Link to="/case-study" className={styles.secondaryButton}>
              View all
            </Link>
          </div>
          <div className={styles.cardGrid}>
            {featuredStudies.map((study) => (
              <article key={study.slug} className={styles.caseCard}>
                <div className={styles.caseImageWrapper}>
                  <img
                    src={study.coverImage}
                    alt={study.title}
                    className={styles.caseImage}
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>
                <div className={styles.caseBody}>
                  <div className={styles.caseTags}>
                    <span className={styles.caseTag}>{study.industry}</span>
                    <span className={styles.caseTag}>{study.location}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <div className={styles.caseTags}>
                    {study.tags.map((tag) => (
                      <span key={tag} className={styles.caseTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.caseFooter}>
                  <span>{study.publishedAt}</span>
                  <Link to={`/case-study/${study.slug}`} className={styles.primaryButton}>
                    Read
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.contact} id="contact">
        <Container compact>
          <div className={styles.contactCard}>
            <div>
              <h3 className={styles.sectionTitle}>Ready to map your rollout?</h3>
              <p className={styles.sectionDescription}>
                Get a page-by-page plan with navigation fixes, route setup, and an SEO-friendly baseline.
              </p>
            </div>
            <div className={styles.contactActions}>
              <Link className={styles.primaryButton} to="/case-study/the-rented-runway#contact">
                Book a consult
              </Link>
              <a className={styles.secondaryButton} href="mailto:contact@fluxorae.com">
                Email the team
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
