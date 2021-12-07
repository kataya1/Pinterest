import styles from "./Searchbox.module.css";
import { ReactComponent as Magniglass } from "./magni.svg";
import { useState, useEffect, useRef, useLayoutEffect, useContext } from "react";
import { Authcontext } from "../../Authentication/Authcontext";
import axios from "axios";
import UserSearchView from "./UserSearchView/UserSearchView";
import PinSearchView from "./PinSearchView/PinSearchView"
import {  useNavigate } from "react-router-dom"

let acStylebox = [styles["auto-complete-box"]];
export default function Searchbox({ dropOpen, setDropOpen }) {
    const [query, setQuery] = useState("");
    const acbox = useRef(null);
    const { host } = useContext(Authcontext);
    const [userandPins, setUserandPins] = useState({})
    const navigate = useNavigate()

    const [userList, setUserList] = useState([])
    const [pinList, setPinList] = useState([])
    // const [google, setGoogle] = useState([])

    useEffect(() => {
        if (query && dropOpen === "query_menu") {

            acStylebox = [
                styles["auto-complete-box"],
                styles["auto-complete-box-V"],
            ];

        } else {

           
            acStylebox = [styles["auto-complete-box"], styles["auto-complete-box-H"]];
        }
       

        acbox.current.className = acStylebox.join(" ");
    }, [query, dropOpen]);

    useEffect(() => {
        if (query) {
            axios({
                method: 'GET',
                url: `${host}/accounts/api/v1/suggestquery`,
                headers: {
                    'Content-Type': ' application/json',
                },
                params: { q: query }
            }).then((response) => {
                console.log(response.data)
                setUserandPins(response.data)

            }).catch(err => {
                console.log(err)
            })
        }
    }, [query, host])

    useLayoutEffect(() => {
        if (Object.keys(userandPins).length !== 0) {
            // pinList = userandPins.pins
            setUserList(userandPins.users.map((item) => {
                
                return (
                    <SearchListItem key={`search-user-${item['id']}`} topath={`user/${item['id']}`}  onclick={(e)=>{setDropOpen("false"); navigate(`user/${item['id']}`)}}>
                        <UserSearchView avatar={item.avatar} username={item.username} email={item.email} first_name={item.first_name} last_name={item.last_name}>

                        </UserSearchView>
                    </SearchListItem>)

            })) 
            setPinList(userandPins.pins.map((item) => {
                
                return (
                    <SearchListItem key={`search-pin-${item['id']}`}   onclick={(e)=>{setDropOpen("false"); navigate(`pin/${item['id']}`)}}>
                        <PinSearchView image={item.image} title={item.title} created_at={item.created_at}>

                        </PinSearchView>
                    </SearchListItem>)

            })) 
           
        }


    }, [userandPins, navigate, setDropOpen])


    const onSubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div
            className={
                (query && dropOpen === "query_menu")
                    ? styles["search-box-br-boxy"]
                    : styles["search-box-br-round"]
            }
            id={styles["Search-box"]}
            onClick={(e) => { e.stopPropagation() }}
        >
            <div id={styles["sb-magnifying-glass"]}>
                <Magniglass style={{ fontSize: "10px" }} />
            </div>
            <form
                id={styles["sb-input-container"]}
                action="https://google.com/search"
                method="GET"
                onSubmit={(e) => { onSubmitHandler(e) }}
            >
                <input
                    autoComplete="off"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    id={styles["search-input-field"]}
                    name="q"
                    onFocusCapture={(e) => { e.stopPropagation(); setDropOpen('query_menu'); }}
                />
            </form>

            <div ref={acbox} className={acStylebox.join(" ")}>
                <ul className={styles.query_list}>
                    {userList.length === 0 && pinList.length === 0 && <li>no results...</li> }
                    { userList  }
                    { pinList }
                </ul>
            </div>
        </div>
    );
}

export function SearchListItem({ children, onclick}) {

    return (
        <li onClick={onclick}>
                {children}
        </li>
    )
}