import React from 'react'
import './Avatar.css'

const Avatar = ({src}) => { 
    return (
        <div className="avatar" >
            <div className="img">
                <img src={src} alt="ProfilePicture"/>
            </div>
        </div>
    )
}

export default Avatar
