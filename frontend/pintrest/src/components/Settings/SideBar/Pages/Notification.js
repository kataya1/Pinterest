import React from 'react'

import styles from './pages.module.css'

export default function Notification() {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Notification</h3>
                <p>We'll always let you know about important changes, but you pick what else you want to hear about.</p>
            </div>
            <div className={`${styles.FlexRow} ${styles.mt1}`}>
                <div className={styles.mt1}>
                    <h5>On Pinterest</h5>
                    <p>Pick which notifications to see while in the app or on the site.</p>
                </div>
                <div>
                    <button className={`${styles.buttonSettings} ${styles.mt15} ${styles.ml1}`}>Edit</button>
                </div>
            </div>
            <div className={styles.FlexRow}>
                <div className={styles.mt1}>
                    <h5>By email</h5>
                    <p>Pick which notifications to see while in the app or on the site.</p>
                </div>
                <div>
                    <button className={`${styles.buttonSettings} ${styles.mt15} ${styles.ml1}`}>Edit</button>
                </div>
            </div>    
            <div className={styles.FlexRow}>
                <div className={styles.mt1}>
                    <h5>By push notification</h5>
                    <p>Pick which notifications to see while in the app or on the site.</p>
                </div>
                <div>
                    <button className={`${styles.buttonSettings} ${styles.mt15} ${styles.ml1}`}>Edit</button>
                </div>
            </div>
        </React.Fragment>
    )
}
