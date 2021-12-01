import React, {useContext} from 'react'
import styles  from "./UserSeachView.module.css"
import { Authcontext } from "../../../Authentication/Authcontext";



export default function UserSearchView({avatar, username, email, first_name, last_name}) {
    const { host } = useContext(Authcontext);
   
    return (
        <div className={styles.userdiv}>
            <div className={styles.avatarcont}>
                
                <img src={`${host}${avatar ? avatar : "/media/profilePic/default.jpg"}`} alt="profile"/>
            </div>
            <div className={styles.info}>
                <p>
                    {username}
              
                </p>
                <p>
                    {first_name + ' ' + last_name}
                </p>
                <p className={styles.email}>
                    {email}
                </p>
            </div>
        </div>
    )
}
