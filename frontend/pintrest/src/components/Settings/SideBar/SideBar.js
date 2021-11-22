import React from "react";
import './SideBar.css'
import { SideBarButton } from "./SideBarButton/SideBarButton";
import {NavLink } from 'react-router-dom'

const SideBar = () => {
    return(
        <React.Fragment>
            <div className='side-bar'>
                <NavLink to = '/settings/' end={true}>
                    <SideBarButton>Public profile</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/account-settings'>
                    <SideBarButton>Account settings</SideBarButton>
                </NavLink>
                <NavLink to = '/edit'>
                    <SideBarButton>Home Feed Turner</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/claim'>
                    <SideBarButton>Claim</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/permissions'>
                    <SideBarButton>Permissions</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/notifications'>
                    <SideBarButton>Notifications</SideBarButton>    
                </NavLink>
                <NavLink to = '/settings/privacy'>
                    <SideBarButton>Privacy and data</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/security'>
                    <SideBarButton>Security</SideBarButton>
                </NavLink>
                <NavLink to = '/settings/apps'>
                    <SideBarButton>Apps</SideBarButton>
                </NavLink>
            </div>
            
        </React.Fragment>
    )
}

export default SideBar