import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Dropmenuitem } from "../Dropdown/Dropdown";
import axios from "axios";
import PinSearchView from "../Searchbox/PinSearchView/PinSearchView";
import { Link } from "react-router-dom";

const host = localStorage.getItem("host");
export default function Notifications({ setDropOpen }) {
    const [pinlist, setPinlist] = useState([]);
    useEffect(() => {
        axios.get(`${host}/home/`).then((res) => {
            let resdata = res.data
            let numberOfNotifications = Math.floor(Math.random() * 3 + 2);
            let arr = [];
            for (let i = 0; i <= numberOfNotifications; i++) {
                
                let pinNumber = Math.floor(Math.random() * 5);
                arr.push(res.data[pinNumber]);
                resdata.splice(pinNumber, 1)
            }
            setPinlist(arr);
        });
    }, []);

    return (
        <Dropdown>
            <Dropmenuitem style={{}}>
            </Dropmenuitem>
                <p style={{ textAlign: "center" , position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10, padding: 10, width: "300px" }}>Pins you might Like...</p>
            {pinlist.map((item) => {
                return (
                    item && 
                    <Dropmenuitem
                        key={`pin-${item['id']}`}
                        onclick={(e) => {
                            setDropOpen("false");
                        }}
                    >
                        <Link to={`pin/${item["id"]}`}>
                            <PinSearchView
                                image={item.image}
                                title={item.title}
                                created_at={item.created_at}
                            ></PinSearchView>
                        </Link>
                    </Dropmenuitem>
                );
            })}
        </Dropdown>
    );
}
