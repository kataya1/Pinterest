import React from "react";

import styles from './pages.module.css'

const ProfileEdit = () => {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Public profile</h3>
                <p>People visiting your profile will see the following info</p>
            </div>
            <div>
                Photo
            </div>
            <div className={styles.profilePhoto}>
                <img className={styles.image} src="https://i.pinimg.com/280x280_RS/bf/bd/96/bfbd96d96124cbf228aafe10040fff5c.jpg" alt="profile" />
                <button className={`${styles.buttonSettings} ${styles.ml1}`}>Change</button>
            </div>
            <div className={`${styles.NameSection} ${styles.pt1}`}>
                <div className={`${styles.FlexCol} ${styles.width50} ${styles.mr1}`}>
                    <label>First Name</label>
                    <input className={`${styles.inputSettings}`} type="text" defaultValue="Hassan"/>
                </div>
                <div className={`${styles.FlexCol} ${styles.width50} ${styles.mr1}`}>
                    <label>Last Name</label>
                    <input className={`${styles.inputSettings}`} type="text" defaultValue="Tarek"/>
                </div>
            </div>
            <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                <label>Short bio</label>
                <input className={`${styles.inputSettings}`} type="text" />
            </div>
            <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                <label>Username</label>
                <input className={`${styles.inputSettings}`} type="text"/>
                <p className={`${styles.pt1}`}>www.pinterest.com/</p>
            </div>
        </React.Fragment>
    )
}

export default ProfileEdit