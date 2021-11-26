import React from "react"
import SideBar from "./SideBar/SideBar"
import { Outlet } from "react-router-dom"

import styles from './Settings.module.css'
import DownBar from "./DownBar/DownBar"

const Settings = () =>{
    return(
    <React.Fragment>
        <div className= {styles.settingsPage}>
            <SideBar />
            <div className={styles.sidebarContent}>
                <Outlet />
            </div>
            <div className={styles.downBar}>
                <DownBar />
            </div>
        </div>
    </React.Fragment>
    )
}

export default Settings