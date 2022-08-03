import styles from '../styles/Home.module.css'
import HistoryTransaction from '../components/user/history/history-transaction'
import SidebarAdmin from '../components/admin/index/sidebar-admin'
import VerifTransaction from '../components/admin/verif-transaction/verif-transaction'
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
                  <div flex="col" style={{ marginTop: "5vh"}}>
                    <h1>Verif Transaction</h1>
                    <VerifTransaction  />
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