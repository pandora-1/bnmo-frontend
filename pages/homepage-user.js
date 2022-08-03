import styles from '../styles/Home.module.css'
import ProfileComponent from '../components/user/profile/profile-component'
import SidebarUser from '../components/user/index/sidebar-user'

export default function HomepageUser() {
  return (
    <div className={styles.container}>
      <main className={styles.backgroundmain}>
        <div className='row flex-nowrap'>
          <SidebarUser />
          <ProfileComponent />
        </div>
      </main>
    </div>
  )
}