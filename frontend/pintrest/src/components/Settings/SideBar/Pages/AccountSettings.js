import React, { useContext, useState, useEffect } from "react";
import { Authcontext } from "../../../Authentication/Authcontext";
import axios from "axios";

import styles from './pages.module.css'
import styles2 from './pages.module.css'


const AccountSettings = () => {
    const { currentUser, setCurrentUser } = useContext(Authcontext)
    const [email, setEmail] = useState("")


    const host = "http://localhost:8000"
    const path = '/accounts/api/v1'
    const endpoint = '/profile/update'
    let token = localStorage.getItem('token')

    const onSubmitHandler = (e) => {
        e.preventDefault()

        // this if statement so that onsubmithandler does nothing, remove it when you're ready
        if (false){

            let usr = currentUser
            usr.email = email
            axios({
                method: 'PUT',
                url: `${host}${path}${endpoint}`,
                headers: {
                    'Content-Type': ' application/json',
                    'Authorization': 'token ' + token
                },
                data:{
                    email: email,
                }
            }).then((response) => {
                console.log(response)
                setCurrentUser(usr)
    
            }).catch(err => {
                if (err.response) {
                    console.log(err.response)
                }
            })
        }
    }
    useEffect(() => {
        setEmail(currentUser.email)
    }, [currentUser])


    return (
        <React.Fragment>
            <form onSubmit={(e) => {onSubmitHandler(e)}}>
                <div className={styles.topSection}>
                    <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05} ${styles.mr1}`}>Account Settings</h3>
                    <p>Set your login preferences, help us personalize your experience and make big account changes here</p>
                </div>
                <div>
                    <h5>Basic information</h5>
                </div>
                <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                    <label>Email</label>
                    <p>{email}</p>
                </div>
                <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                    <label>
                        Country/Region
                    </label>
                    <select className={`${styles.inputSettings}`}>
                        <option value="UAE">UAE</option>
                        <option value="KSA">KSA</option>
                        <option value="EGYPT">EGYPT</option>
                    </select>
                </div>
                <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                    <label>
                        Language
                    </label>
                    <select className={`${styles.inputSettings}`}>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="french">french</option>
                    </select>
                </div>
                <div className={`${styles.gender} ${styles.pt1}`}>
                    <div>
                        <label>Gender</label>
                    </div>
                    <div>
                        <label className={styles.container}>Male
                            <input type="radio" defaultChecked name="radio" />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.container}>Female
                            <input type="radio" name="radio"/>
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                </div>
                <div >
                    <div className={styles.DownBar}>
                        <div></div>
                        <div>
                            {/* <button className={`${styles.buttonSettings} ${styles2.mr1} ${styles2.mt1}`}>Reset</button> */}
                            <button className={styles2.buttonSettings} type="submit">Save</button>
                        </div>
                        <div className={styles.questionBtn}><svg className={styles.svgLogo} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
                        </svg>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default AccountSettings