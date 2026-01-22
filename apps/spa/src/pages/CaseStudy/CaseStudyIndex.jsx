import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'
import Seo from '../../components/Seo'
import styles from './CaseStudyIndex.module.css'
import { caseStudies } from '../../data/caseStudies'

function formatDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function CaseStudyIndex() {
  const orderedStudies = useMemo(
    () => [...caseStudies].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
    [],
  )

  return (
    <>
      <Seo
        title="Case studies"
        description="Case studies with SEO-friendly routing, accessible navigation, and performance-minded layouts."
      />
      <section className={styles.page}>
        <Container>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>Case studies</h1>
              <p className={styles.summary}>
                One source of truth for slugs, metadata, and sections. Routes are lazy-loaded to keep initial bundles light.
              </p>
              <div className={styles.tagStrip}>
                <span className={styles.tag}>React 18</span>
                <span className={styles.tag}>Vite + Router v6</span>
                <span className={styles.tag}>SEO & accessibility</span>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {orderedStudies.map((study) => (
              <article key={study.slug} className={styles.card}>
                <img
                  src={study.coverImage}
                  alt={study.title}
                  loading="lazy"
                  width="720"
                  height="360"
                />
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.location}</span>
                  </div>
                  <h2>{study.title}</h2>
                  <p>{study.summary}</p>
                  <div className={styles.sectionPills}>
                    {study.sections.slice(0, 3).map((section) => (
                      <span key={section.id} className={styles.pill}>
                        {section.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span>{formatDate(study.publishedAt)}</span>
                  <Link to={`/case-study/${study.slug}`} className={styles.linkButton}>
                    Read case
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.helper}>
            <span>Need a tabbed sub-page?</span>
            <Link to="/case-study/the-rented-runway/seo">Jump to a tab example</Link>
          </div>
        </Container>
      </section>
    </>
  )
}
