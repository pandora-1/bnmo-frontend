import styles from '../styles/Home.module.css'
import HistoryTransaction from '../components/user/history/history-transaction'
import SidebarAdmin from '../components/admin/index/sidebar-admin'
import VerifUser from '../components/admin/verif-user/verif-user'

export default function VerifUserPage() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarAdmin />
          <div flex="col" style={{ marginTop: "5vh"}}>
            <h1>Verif User</h1>
            <VerifUser  />
          </div>
        </div>
      </main>
    </div>
  )
}