import { library } from "@fortawesome/fontawesome-svg-core";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import {
    faBell,
    faCommentDots,
    faSearch,
    faChevronDown,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import ButtonFlex from "../Button/ButtonFlex";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Searchbox from "./Searchbox/Searchbox";
import "./Navbar.css";
import { useContext, useState, useEffect } from "react";
import { Authcontext } from "../Authentication/Authcontext";
import Dropdown, { Dropmenuitem } from "./Dropdown/Dropdown";
import axios from "axios";
import Userinfolistisem from "./Userinfolistitem/Userinfolistitem"



library.add(
    faPinterest,
    faBell,
    faCommentDots,
    faSearch,
    faChevronDown,
    faUser
);

export default function Navbar() {

    const { isUserLogedin, setisUserLogedin, currentUser, host } = useContext(Authcontext);
    const navigate = useNavigate()

    const handleLogout = (e) => {
        ' removes the token from local storage and sets isUserLogedin to false'
      
        e.preventDefault();
        const host = "http://localhost:8000";
        const path = "/accounts/api/v1";
        const endpoint = "/logout";
        axios({
            method: "GET",
            url: `${host}${path}${endpoint}`,
            headers: {
                "Content-Type": " application/json",
                Authorization: "token " + localStorage.getItem("token"),
            },
        })
            .then((response) => {
                console.log(response);
                localStorage.removeItem("token");
                setisUserLogedin(false);
                navigate('/')
                // navigate("/", { replace: true });
                // this is the part where we redirect
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                } else {
                    console.log(err);
                }
            });
    };
    const [dropOpen, setDropOpen] = useState(false)
    document.addEventListener('click', () => {
        setDropOpen(false)
    })
    useEffect(() => {
        "closes the dropdown menu when the user logsout"
        setDropOpen(false)
    }, [isUserLogedin])

    const emptyBoxstyle = {
        width: "300px",
        height: "400px",
    }

    return (
        <nav className={styles.navigation}>
            <Link to="/">
                <ButtonFlex buttonStyle="btn--logo">
                    <FontAwesomeIcon icon={["fab", "pinterest"]} size="2x" />
                </ButtonFlex>
            </Link>
            <Link to="/">
                <ButtonFlex buttonStyle="btn--text">Home</ButtonFlex>
            </Link>
            <Searchbox />
            {isUserLogedin ? (
                <>

                    <ButtonFlex buttonStyle="btn--icon" onClick={(e)=>{ e.stopPropagation(); setDropOpen('notifications_dropdown')}}>
                        <FontAwesomeIcon icon="bell" size="2x" />
                        { dropOpen === "notifications_dropdown" && 
                            <Dropdown>
                                <Dropmenuitem>
                                    <p style={{textAlign: 'center'}}>coming soon...</p>
                                    <div style={emptyBoxstyle}></div>
                                </Dropmenuitem>
                            </Dropdown>
                        }
                    </ButtonFlex>
                    <ButtonFlex buttonStyle="btn--icon" onClick={(e)=>{ e.stopPropagation(); setDropOpen('messages_dropdown')}}>
                        <FontAwesomeIcon icon="comment-dots" size="2x" />
                        { dropOpen === "messages_dropdown" && 
                            <Dropdown>
                                <Dropmenuitem>
                                    <p style={{textAlign: 'center'}}>No messages...</p>
                                    <div style={emptyBoxstyle}></div>
                                </Dropmenuitem>
                            </Dropdown>
                        }
                    </ButtonFlex>
                    <Link to="/profile">
                        <Avatar src={`${host}${currentUser.avatar}`} />
                    </Link>
                    <ButtonFlex
                        buttonStyle="btn--down"
                        onClick={(e) => { e.stopPropagation(); setDropOpen('carret_dropdown'); }}
                    >
                        <FontAwesomeIcon icon="chevron-down" />
                        {dropOpen === "carret_dropdown" &&
                            <Dropdown>
                                <Dropmenuitem>
                                    <Userinfolistisem avatarsrc={`${host}${currentUser.avatar}`} username={currentUser.username} email={currentUser.email} />
                                </Dropmenuitem>
                                <Dropmenuitem>
                                    <Link to="/settings">Settings</Link>
                                </Dropmenuitem>
                                <Dropmenuitem>
                                    <Link to="/edit">Tune Your Home Feed</Link>
                                </Dropmenuitem>
                                <Dropmenuitem onClick={(e) => { handleLogout(e) }}>
                                    <p>Logout</p>
                                </Dropmenuitem>
                            </Dropdown>}
                    </ButtonFlex>
                </>
            ) : (
                <>
                    <Link to="/signup">
                        <ButtonFlex>Sign up</ButtonFlex>
                    </Link>

                    <Link to="/login">
                        <ButtonFlex>Sign in</ButtonFlex>
                    </Link>
                </>
            )}
        </nav>
    );
}
