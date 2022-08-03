import styles from '../styles/Home.module.css'
import Footer from '../components/index/footer'
import Navbar from '../components/index/navbar'
import Hero from '../components/index/hero'

export default function Home() {
  return (
    <div className={styles.backgroundmain}>
      <Navbar />
      <main className={styles.main}>
      <Hero />
      </main>
    </div>
  )
}
