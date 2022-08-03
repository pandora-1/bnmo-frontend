import RegisterComponent from '../components/register/register-component'
import styles from '../styles/Home.module.css'

export default function Register() {
    return (
      <div className={styles.backgroundmain}>
        <main className={styles.main}>
            <RegisterComponent />
        </main>
      </div>
    )
  }