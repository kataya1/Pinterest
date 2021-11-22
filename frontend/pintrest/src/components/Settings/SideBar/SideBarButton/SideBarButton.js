import React from 'react'
import './SideBarButton.css'

export const SideBarButton = ({children}) => {
    return (
        <React.Fragment>
            <button className={`side-btn`}>{children}</button>
        </React.Fragment>
    )
}
