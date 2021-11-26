import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SideBarButton.module.css'

export const SideBarButton = ({children, toProp}) => {
    return (
        <React.Fragment>
            <div className={styles.sidebarData}>
                <NavLink to={toProp}>
                    <button className={styles.sideBtn}>{children}</button>
                </NavLink>
            </div>
        </React.Fragment>
    )
}
