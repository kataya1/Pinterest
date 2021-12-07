import React, {useContext} from 'react'
import styles  from "./PinSearchView.module.css"
import { Authcontext } from "../../../Authentication/Authcontext";



export default function UserSearchView({image, title, created_at}) {
    const { media } = useContext(Authcontext);
    let d = new Date(created_at)
    return (
        <div className={styles.pindev}>
            <div className={styles.imagecont}>
                <img alt="" src={`${media}${image ? image : "/media/pins/defaultpin.jpg"}`} />
            </div>
            <div className={styles.info}>
                <p>
                    {title}
              
                </p>
                <p className={styles.date}>
                    {  d.toDateString()}
                </p>
            </div>
        </div>
    )
}
