import React from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown(prop) {


    return (
        <div className={styles.dropdown}>
            <ul>
                {prop.children}
            </ul>
        </div>
    )
}

export function Dropmenuitem(prop){

    return (
        <li onClick={prop.onClick}>
            {prop.children}
        </li>
    )
}
