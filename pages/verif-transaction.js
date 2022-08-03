import styles from '../styles/Home.module.css'
import HistoryTransaction from '../components/user/history/history-transaction'
import SidebarAdmin from '../components/admin/index/sidebar-admin'
import VerifTransaction from '../components/admin/verif-transaction/verif-transaction'

export default function VerifUserPage() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarAdmin />
          <div flex="col" style={{ marginTop: "5vh"}}>
            <h1>Verif Transaction</h1>
            <VerifTransaction  />
          </div>
        </div>
      </main>
    </div>
  )
}