import React from 'react'

import styles from './DownBar.module.css'
import styles2 from '../SideBar/Pages/pages.module.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faQuestion)

const DownBar = () => {
    return (
        <React.Fragment>
            <div className={styles.DownBar}>
                <div></div>
                <div>
                    <button className={`${styles2.buttonSettings} ${styles2.mr1} ${styles2.mt1}`}>Reset</button>
                    <button className={styles2.buttonSettings} disabled>Save</button>
                </div>
                <button className={` ${styles2.mr1} ${styles.borderRaduis50} ${styles2.buttonSettings}`}><FontAwesomeIcon icon="question" /></button>
            </div>
        </React.Fragment>
    )
}

export default DownBar
