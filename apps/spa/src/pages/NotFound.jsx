import { Link } from 'react-router-dom'
import Container from '../components/Layout/Container'
import Seo from '../components/Seo'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be located." />
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.card}>
            <h1>404: Page not found</h1>
            <p>The route you requested is unavailable. Try a case study or go back home.</p>
            <div className={styles.actions}>
              <Link className={styles.button} to="/">
                Go home
              </Link>
              <Link className={styles.secondary} to="/case-study">
                View case studies
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
