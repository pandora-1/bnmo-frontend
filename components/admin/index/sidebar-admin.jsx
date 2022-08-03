import React from 'react'
import config from "../../../config";
import axios from 'axios';
import Cookies from 'universal-cookie';

const SidebarAdmin = () => {
    const handlerLogOut = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('isAdmin')
        localStorage.removeItem('username')
    }
    return(
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{backgroundColor: "#0f2865", borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem"}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100" style={{color: "#f3f4fc"}}>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/homepage-admin" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Hi !</span>
                        </a>
                    </li>
                    <li>
                        <a href="/homepage-admin" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Search Customer</span></a>
                    </li>
                    <li>
                        <a href="/verif-user" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Verif User</span></a>
                    </li>
                    <li>
                        <a href="/verif-transaction" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Verif Transaction</span> </a>
                    </li>
                    <li>
                        <a onClick={handlerLogOut} href="/" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Log Out</span> </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default SidebarAdmin