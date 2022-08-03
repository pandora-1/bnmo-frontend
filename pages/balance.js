import styles from '../styles/Home.module.css'
import BalanceComponent from '../components/user/balance/balance-component'
import SidebarUser from '../components/user/index/sidebar-user'

export default function Balance() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarUser />
          <BalanceComponent />
        </div>
      </main>
    </div>
  )
}