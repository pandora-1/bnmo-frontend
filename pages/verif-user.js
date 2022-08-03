import styles from '../styles/Home.module.css'
import HistoryTransaction from '../components/user/history/history-transaction'
import SidebarAdmin from '../components/admin/index/sidebar-admin'
import VerifUser from '../components/admin/verif-user/verif-user'
import React, { useEffect } from 'react'
import NotAuthorized from '../components/index/not-authorized';

export default function VerifUserPage() {
    const [isAdmin, setIsAdmin] = React.useState(100)
    React.useEffect(() => {
      setIsAdmin(localStorage.getItem('isAdmin'))
  }, [0])
    if(isAdmin == 1) {
        return (
            <div className={styles.container}>
              <main className={styles.backgroundmain}>
                <div className='row flex-nowrap'>
                  <SidebarAdmin />
                  <div flex="col" style={{ marginTop: "5vh", width: "75%"}}>
                    <h1>Verif User</h1>
                    <VerifUser  />
                  </div>
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