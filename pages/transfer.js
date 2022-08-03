import styles from '../styles/Home.module.css'
import TransferComponent from '../components/user/transfer/transfer-component'
import SidebarUser from '../components/user/index/sidebar-user'
import NotAuthorized from '../components/index/not-authorized';
import React from 'react'

export default function Transfer() {
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
            <TransferComponent />
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