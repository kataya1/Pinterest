import axios from "axios";
import React, { useRef } from "react";
import styles from "./Comment.module.css";

const media = localStorage.getItem("media");
const currentUserAvatarURL = localStorage.getItem("currentUserAvatarURL");
const host = localStorage.getItem("host");
const token = localStorage.getItem("token");

// document.addEventListener('keydown', (e)=>{
//     // console.log(e.code)
//     console.log(e.key === "Enter" && !e.shiftKey)
//     // console.log(e)
// })

export default function InputComment({pin_id, setComments}) {
    const textbox = useRef(null);
    const postComment = (e) => {
        e.preventDefault();
        axios({
            url: `${host}/pin/${pin_id}/comments`,
            method: "POST",
            headers: {
                Authorization: "Token " + token,
            },
            data: {
                content: textbox.current.value,
            },
        })
            .then((res) => {
                axios({
                    url: `${host}/pin/${pin_id}/comments`,
                    method: "GET",
                    headers: {
                        Authorization: "Token " + token,
                    },
                })
                    .then((res) => {
                        setComments(res.data["comment_list"]);
                    })
                    .catch((err) => {
                        
                         console.log(err);
                    });

                textbox.current.value = "";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={`row ${styles.comment}`}>
            {/* avatar */}
            <div className="col-auto">
                <img
                    src={`${media}${currentUserAvatarURL}`}
                    alt=""
                    className={styles.image}
                    style={{}}
                />
            </div>

            <div className="col">
                <form onSubmit={postComment}>
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className={styles["comment-msg"]}
                        ref={textbox}
                    />
                </form>
            </div>
        </div>
    );
}
