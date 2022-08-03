import styles from '../styles/Home.module.css'
import TransferComponent from '../components/user/transfer/transfer-component'
import SidebarUser from '../components/user/index/sidebar-user'

export default function Transfer() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarUser />
          <TransferComponent />
        </div>
      </main>
    </div>
  )
}