import styles from '../styles/Home.module.css'
import HistoryTransaction from '../components/user/history/history-transaction'
import HistoryTransfer from '../components/user/history/history-transfer'
import SidebarUser from '../components/user/index/sidebar-user'

export default function History() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarUser />
          <div flex="col" style={{ marginTop: "5vh"}}>
            <h1>History Transaksi</h1>
            <HistoryTransaction  />
            <br />
            <h1>History Transfer</h1>
            <HistoryTransfer />
          </div>
        </div>
      </main>
    </div>
  )
}