import styles from '../styles/Home.module.css'
import SearchCustomer from '../components/admin/search-customer/search-customer'
import SidebarAdmin from '../components/admin/index/sidebar-admin'

export default function HomepageUser() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarAdmin />
          <SearchCustomer />
        </div>
      </main>
    </div>
  )
}