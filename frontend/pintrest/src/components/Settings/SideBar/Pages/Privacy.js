import React from 'react'

import styles from './pages.module.css'

export default function privacy() {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Privacy and data</h3>
                <p>Decide whether your Pinterest profile will be hidden from search engines, and what kinds of data you want us to use to improve the recommendations and ads you see.</p>
            </div>
            <div className={`${styles.gender} ${styles.pt1}`}>
                <div>
                    <h5>@Mentions</h5>
                    <p>Choose who can @mention you</p>
                </div>
                <div>
                    <label className={styles.container}>Anyone on Pinterest
                        <input type="radio" defaultChecked name="radio" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>Only people you follow
                        <input type="radio" name="radio" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>Turn off - no one can @mention you
                        <input type="radio" name="radio" />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
            <div className={`${styles.gender} ${styles.pt1}`}>
                <h5>Search Privacy</h5>
                <div>
                    <label className={styles.containerCheckbox}>Hide your profile from search engines (Ex. Google).
                        <input type="checkbox"  />
                        <span className={styles.checkmarkCheckbox}></span>
                    </label>
                </div>
            </div>
        </React.Fragment>
    )
}
