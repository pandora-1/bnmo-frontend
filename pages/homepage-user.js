import styles from '../styles/Home.module.css'
import ProfileComponent from '../components/user/profile/profile-component'
import SidebarUser from '../components/user/index/sidebar-user'
import NotAuthorized from '../components/index/not-authorized';
import React, { useEffect } from 'react'

export default function HomepageUser() {
    const [isAdmin, setIsAdmin] = React.useState(100)
    React.useEffect(() => {
      setIsAdmin(localStorage.getItem('isAdmin'))
  }, [0])
    if(isAdmin == 0) {
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
    } else {
      return (
        <NotAuthorized />
      )
    }
}