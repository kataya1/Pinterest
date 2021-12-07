import React from 'react'

import styles from './pages.module.css'

export default function Permission() {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Permissions</h3>
                <p>Control which comments appear with your content and whether your Idea Pins can be downloaded.</p>
            </div>
            <h5>Comments</h5>
            <h6>Manual filter</h6>
            <div className={styles.FlexRow}>
                <p>Hide comments from Pins you created that contain specific words or phases</p>
                <div>
                    <label className={styles.switch}>
                        <input type={styles.checkbox} />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                </div>
            </div>
        </React.Fragment>
    )
}
