import React from "react"
import SideBar from "./SideBar/SideBar"
import { Outlet } from "react-router-dom"

import styles from './Settings.module.css'

const Settings = () =>{
    return(
    <React.Fragment>
        <div className= {styles.settingsPage}>
            <SideBar />
            <div className={styles.sidebarContent}>
                <Outlet />
            </div>
            
        </div>
    </React.Fragment>
    )
}

export default Settings