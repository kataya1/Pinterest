import React, {useContext} from 'react'
import styles  from "./PinSearchView.module.css"
import { Authcontext } from "../../../Authentication/Authcontext";



export default function UserSearchView({image, title, created_at}) {
    const { host } = useContext(Authcontext);
   
    return (
        <div className={styles.pindev}>
            <div className={styles.imagecont}>
                <img alt="" src={`${host}${image ? image : "/media/pins/defaultpin.jpg"}`} />
            </div>
            <div className={styles.info}>
                <p>
                    {title}
              
                </p>
                <p className={styles.date}>
                    {created_at}
                </p>
            </div>
        </div>
    )
}
