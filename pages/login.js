import LoginComponent from "../components/login/login-component"
import styles from '../styles/Home.module.css'

export default function Login() {
    return (
      <div className={styles.backgroundmain}>
        <main className={styles.main}>
            <LoginComponent />
        </main>
      </div>
    )
  }