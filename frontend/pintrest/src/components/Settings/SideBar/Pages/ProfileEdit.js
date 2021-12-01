import React, { useContext, useState, useEffect } from "react";
import { Authcontext } from "../../../Authentication/Authcontext";
import axios from "axios";

import styles2 from './pages.module.css'
import styles from './pages.module.css'



const ProfileEdit = () => {
    const { currentUser, setCurrentUser, host } = useContext(Authcontext)
    // const [user,setUser] = useState(currentUser)
    const [username, setUsername] = useState(currentUser.username)
    const [firstName, setFirstName] = useState(currentUser.first_name)
    const [lastName, setLastName] = useState(currentUser.last_name)
    const [bio, setBio] = useState(currentUser.bio)
    const [imgURL, setImgURL] = useState("")
    const [inputFile,setInputFile] = useState(null)

    const path = '/accounts/api/v1'
    const endpoint = '/profile/update'
    let token = localStorage.getItem('token')



    const uploadImage = (e)=>{
        // const inputfile = e.target.files[0]
        let imgLink = URL.createObjectURL(e.target.files[0])
        setImgURL(imgLink)
        setInputFile(e.target.files[0])
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('first_name', firstName)
        formdata.append('last_name', lastName)
        formdata.append('username', username)
        formdata.append('bio', bio)
        formdata.append('is_active', true)
        if (inputFile !== null)
            formdata.append('avatar', inputFile)

        // let usr = currentUser
        // usr.first_name = firstName
        // usr.last_name = lastName
        // usr.bio = bio
        // usr.username = username
        // usr.avatar = inputFile

        axios({
            method: 'PUT',
            url: `${host}${path}${endpoint}`,
            headers: {
                'Authorization': 'token ' + token
            },
            data:formdata
        }).then((response) => {
            console.log(response.data)
            setCurrentUser(response.data)
        }).catch(err => {
            if (err.response) {
                console.log(err.response)
            }
        })
    }

    useEffect(() => {
        setUsername(currentUser.username)
        setFirstName(currentUser.first_name)
        setLastName(currentUser.last_name)
        setBio(currentUser.bio)
        setImgURL(`${host}${currentUser.avatar}`)
    }, [currentUser, host ])

    return (
        <React.Fragment>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className={styles.topSection}>
                    <h3 className={`${styles.header3} ${styles.m0} ${styles.pb05}`}>Public profile</h3>
                    <p>People visiting your profile will see the following info</p>
                </div>
                <div>
                    Photo
                </div>
                <div className={styles.profilePhoto}>
                    <img
                        className={styles.image}
                        src={imgURL}
                        alt="profile"
                    />
                    <button 
                    className={`${styles.buttonSettings} ${styles.posrelative} ${styles.ml1}`}>
                        Change  <input 
                        className="media-upload" 
                        onChange={(e) => uploadImage(e)} 
                        type="file" 
                        name='image' 
                        /></button>

                </div>
                <div className={`${styles.NameSection} ${styles.pt1}`}>
                    <div className={`${styles.FlexCol} ${styles.width50} ${styles.mr1}`}>
                        <label>First Name</label>
                        <input
                            className={`${styles.inputSettings}`}
                            type="text"
                            value={firstName || ""}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.FlexCol} ${styles.width50} ${styles.mr1}`}>
                        <label>Last Name</label>
                        <input
                            className={`${styles.inputSettings}`}
                            type="text"
                            value={lastName || ""}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                    <label>Short bio</label>
                    <input
                        className={`${styles.inputSettings}`}
                        type="text"
                        value={bio || ""}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className={`${styles.FlexCol} ${styles.pt1} ${styles.mr1}`}>
                    <label>Username</label>
                    <input
                        className={`${styles.inputSettings}`}
                        type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username || ""}
                    />
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

export default ProfileEdit