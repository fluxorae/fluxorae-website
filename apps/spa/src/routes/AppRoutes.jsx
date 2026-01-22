import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_PATHS } from './RoutePaths'
import styles from './AppRoutes.module.css'

const Home = lazy(() => import('../pages/Home/Home.jsx'))
const CaseStudyIndex = lazy(() => import('../pages/CaseStudy/CaseStudyIndex.jsx'))
const CaseStudyDetail = lazy(() => import('../pages/CaseStudy/CaseStudyDetail.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

function Loader() {
  return <div className={styles.loader}>Loading the next section…</div>
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<Home />} />
        <Route path={ROUTE_PATHS.caseStudies} element={<CaseStudyIndex />} />
        <Route path={ROUTE_PATHS.caseStudy} element={<CaseStudyDetail />} />
        <Route path={ROUTE_PATHS.caseStudyTab} element={<CaseStudyDetail />} />
        <Route path={ROUTE_PATHS.notFound} element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
