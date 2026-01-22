import Header from './components/Header/Header'
import Footer from './components/Layout/Footer'
import AppRoutes from './routes/AppRoutes'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
