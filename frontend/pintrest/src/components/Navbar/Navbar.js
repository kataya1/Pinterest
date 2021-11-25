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
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import ButtonFlex from "../Button/ButtonFlex";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Searchbox from "./Searchbox/Searchbox";
import "./Navbar.css";
import { useContext } from "react";
import { Authcontext } from "../Authentication/Authcontext";
// import Dropdown from "./Dropdown/Dropdown";
import axios from 'axios'

library.add(
    faPinterest,
    faBell,
    faCommentDots,
    faSearch,
    faChevronDown,
    faUser
);

export default function Navbar() {
    const { isUserLogedin, setisUserLogedin } = useContext(Authcontext);
    const handleLogout = (e) => {
        e.preventDefault()
        const host = "http://localhost:8000";
        const path = "/accounts/api/v1";
        const endpoint = "/logout";
        axios({
            method: "GET",
            url: `${host}${path}${endpoint}`,
            headers: {
                "Content-Type": " application/json",
                'Authorization': 'token ' + localStorage.getItem('token')
            },
        })
            .then((response) => {
                console.log(response);
                localStorage.removeItem('token')
                setisUserLogedin(false);
                // navigate("/", { replace: true });
                // this is the part where we redirect
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                } else {
                    console.log(err);
                }
            })
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
            <Searchbox></Searchbox>
            {isUserLogedin ? (
                <>
                    <Link to="/settings">
                        <ButtonFlex buttonStyle="btn--icon">
                            <FontAwesomeIcon icon="bell" size="2x" />
                        </ButtonFlex>
                    </Link>
                    <ButtonFlex buttonStyle="btn--icon">
                        <FontAwesomeIcon icon="comment-dots" size="2x" />
                    </ButtonFlex>
                    <Link to="/profile">
                        <Avatar src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80" />
                    </Link>
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

            <ButtonFlex buttonStyle="btn--down" onClick={(e) => { handleLogout(e) }}>
                <FontAwesomeIcon icon="chevron-down" />
                {/* <Dropdown>
                    <Link to="/settings">Settings</Link> 
                    
                </Dropdown> */}
            </ButtonFlex>
        </nav>
    );
}
