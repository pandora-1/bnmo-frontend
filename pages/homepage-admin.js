import styles from '../styles/Home.module.css'
import SearchCustomer from '../components/admin/search-customer/search-customer'
import SidebarAdmin from '../components/admin/index/sidebar-admin'
import NotAuthorized from '../components/index/not-authorized';
import React from 'react'

export default function HomepageAdmin() {
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
                      <SearchCustomer />
                    </div>
                  </main>
                </div>
              )
        } else {
            return <NotAuthorized />
        }
    }