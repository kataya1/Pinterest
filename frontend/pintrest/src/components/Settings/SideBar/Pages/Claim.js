import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube, faEtsy} from '@fortawesome/free-brands-svg-icons'
import { faGlobe, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  styles  from "./pages.module.css";

library.add(faYoutube,faGlobe,faEtsy)

export default function Claim() {
    return (
        <React.Fragment>
            <div className={styles.topSection}>
                <h1 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Claim</h1>
                <p>Get credit for all your content on Pinterest. When you claim your content, your name and profile picture will show up next to any Pins that come from your site or external accounts.</p>
            </div>
            <div className={`${styles.claimSettings} ${styles.mt1}`}>
                <div>
                    <FontAwesomeIcon icon="globe" size="2x" className={styles.mr1}/>
                    Website
                </div>
                <button className={`${styles.buttonSettings}`}>Claim</button>
            </div>
            <div className={`${styles.claimSettings} ${styles.mt1}`}>
                <div>
                <FontAwesomeIcon icon={['fab', 'etsy']} size="2x" className={styles.mr1}/>
                    Etsy
                </div>
                <button className={`${styles.buttonSettings}`}>Claim</button>
            </div>
            <div className={`${styles.claimSettings} ${styles.mt1}`}>
                <div>
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" className={styles.mr1}/>
                    YouTube
                </div>
                <button className={`${styles.buttonSettings}`}>Claim</button>
            </div>
        </React.Fragment>
    )
}
