import React from "react";
import styles from  './SideBar.module.css'
import { SideBarButton } from "./SideBarButton/SideBarButton";

const SideBar = () => {
    return(
        <React.Fragment>
            <nav className={styles.sidebar}>
                <SideBarButton toProp = {'/settings/'}>Public profile</SideBarButton>
                <SideBarButton toProp={'/settings/account-settings'}>Account settings</SideBarButton>
                <SideBarButton toProp={'/edit'}>Home Feed Turner</SideBarButton>
                <SideBarButton toProp={'/settings/claim'}>Claim</SideBarButton>
                <SideBarButton toProp={'/settings/permissions'}>Permissions</SideBarButton>
                <SideBarButton toProp={'/settings/notifications'}>Notifications</SideBarButton>
                <SideBarButton toProp={'/settings/privacy'}>Privacy and data</SideBarButton>
            </nav>
        </React.Fragment>
    )
}

export default SideBar