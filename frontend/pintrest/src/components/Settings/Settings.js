import React from "react"
import SideBar from "../SideBar/SideBar"
import { Outlet } from "react-router-dom"

const Settings = () =>{
    return(
    <React.Fragment>
            <SideBar />
            <div>
                <Outlet />
            </div>
    </React.Fragment>
    )
}

export default Settings