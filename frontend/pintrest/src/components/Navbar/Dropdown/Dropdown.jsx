import React from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown(prop) {


    return (
        <div className={styles.Dropdown}>
            {prop.children}
        </div>
    )
}

export function Dropmenuitem(){


    return (
        <div >

        </div>
    )
}
