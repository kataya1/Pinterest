import React from "react";

import styles from './pages.module.css'

const AccountSettings = () => {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05} ${styles.mr1}`}>Account Settings</h3>
                <p>Set your login preferences, help us personalize your experience and make big account changes here</p>
            </div>
            <div>
                <h5>Basic information</h5>
            </div>
            <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                <label>Email</label>
                <input className={`${styles.inputSettings}`} type="email" defaultValue="a@a.com"/>
            </div>
            <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                <label>
                    Country/Region
                </label>
                <select className={`${styles.inputSettings}`}>
                    <option value="UAE">UAE</option>
                    <option value="KSA">KSA</option>
                    <option defaultValue value="EGYPT">EGYPT</option>
                </select>
            </div>
            <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                <label>
                    Language
                </label>
                <select className={`${styles.inputSettings}`}>
                    <option value="English">English</option>
                    <option defaultValue value="Arabic">Arabic</option>
                    <option value="french">french</option>
                </select>
            </div>
            <div className={`${styles.gender} ${styles.pt1}`}>
            <div>
                <label>Gender</label>
            </div>    
            <div>
                <label className={styles.container}>Male
                    <input type="radio" defaultChecked name="radio"/>
                    <span className={styles.checkmark}></span>
                </label>
                <label className={styles.container}>Female
                    <input type="radio" name="radio"/>
                    <span className={styles.checkmark}></span>
                </label>
            </div>
            </div>
        </React.Fragment>
    )
}

export default AccountSettings