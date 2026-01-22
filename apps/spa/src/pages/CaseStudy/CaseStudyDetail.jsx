import { useEffect, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Container from '../../components/Layout/Container'
import Seo from '../../components/Seo'
import { getCaseStudyBySlug } from '../../data/caseStudies'
import styles from './CaseStudyDetail.module.css'

export default function CaseStudyDetail() {
  const { slug, tab } = useParams()
  const navigate = useNavigate()

  const study = useMemo(() => getCaseStudyBySlug(slug), [slug])
  const hasTab = tab && study?.sections.some((section) => section.id === tab)

  useEffect(() => {
    if (hasTab) {
      const target = document.getElementById(`section-${tab}`)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [hasTab, tab])

  useEffect(() => {
    if (!hasTab && tab && study) {
      navigate(`/case-study/${study.slug}`, { replace: true })
    }
  }, [hasTab, tab, study, navigate])

  if (!study) {
    return (
      <section className={styles.page}>
        <Container>
          <div className={styles.empty}>
            <h1>Case study not found</h1>
            <p>Try a different slug or return to the listing.</p>
            <div className={styles.actions}>
              <Link className={styles.inlineButton} to="/case-study">
                Back to case studies
              </Link>
              <Link className={`${styles.inlineButton} ${styles.inlinePrimary}`} to="/">
                Go home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      <Seo title={study.title} description={study.summary} />
      <section className={styles.page}>
        <Container>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.tagList}>
                <span className={styles.tag}>{study.industry}</span>
                <span className={styles.tag}>{study.location}</span>
              </div>
              <h1 className={styles.title}>{study.title}</h1>
              <p>{study.summary}</p>
              <div className={styles.meta}>
                <span>{study.publishedAt}</span>
                <span>-</span>
                <span>{study.tags.join(' / ')}</span>
              </div>
              <div className={styles.stats}>
                {study.stats.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statValue}>{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className={styles.actions}>
                <Link
                  className={`${styles.inlineButton} ${styles.inlinePrimary}`}
                  to={`/case-study/${study.slug}#contact`}
                >
                  Book a consult
                </Link>
                <a className={styles.inlineButton} href="mailto:contact@fluxorae.com">
                  contact@fluxorae.com
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <img
                src={study.coverImage}
                alt={`${study.title} cover`}
                loading="lazy"
                width="720"
                height="420"
              />
            </div>
          </div>

          <div className={styles.sectionNav}>
            {study.sections.map((section) => (
              <Link
                key={section.id}
                to={`/case-study/${study.slug}/${section.id}`}
                className={`${styles.sectionLink} ${hasTab && tab === section.id ? styles.sectionLinkActive : ''}`}
              >
                {section.title}
              </Link>
            ))}
          </div>

          <div className={styles.sectionList}>
            {study.sections.map((section) => (
              <article id={`section-${section.id}`} key={section.id} className={styles.sectionCard}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul className={styles.pointList}>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.ctaBar} id="contact">
            <div>
              <h3>Need a similar rollout?</h3>
              <p>We prioritize sticky navigation, SEO metadata, and body scroll lock on mobile.</p>
            </div>
            <div className={styles.actions}>
              <Link className={`${styles.inlineButton} ${styles.inlinePrimary}`} to="/case-study">
                View all work
              </Link>
              <a className={styles.inlineButton} href="mailto:contact@fluxorae.com">
                Share your brief
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
