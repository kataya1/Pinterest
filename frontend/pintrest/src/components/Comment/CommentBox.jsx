import axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import InputComment from "./InputComment";
import styles from "./Comment.module.css";

const host = localStorage.getItem("host");
const token = localStorage.getItem("token");
// const media = localStorage.getItem('media')

export default function CommentBox(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const aborter = new AbortController();
        axios({
            url: `${host}/pin/${props.pin_id}/comments`,
            method: "GET",
            headers: {
                Authorization: "Token " + token,
            },
        })
            .then((res) => {
                if (res.data["comment_list"] !== comments)
                    setComments(res.data["comment_list"]);
            })
            .catch((err) => {
                if (err.name === "AbortError") console.log("aborterror");
                else console.log(err);
            });
        return () => {
            aborter.abort();
        };
    }, [props.pin_id, comments]);

    return (
        <div>
            <div
                className={styles.title}
                style={{ display: "block", marginTop: "", marginBottom: "" }}
            >
                <span
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                    }}
                >
                    Comments
                </span>
                <span style={{ marginLeft: "1%" }}>
                    <svg
                        height="18"
                        width="18"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        aria-label=""
                        role="img"
                    >
                        <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
                    </svg>
                </span>
            </div>

            {comments &&
                comments.map((c) => {
                    return (
                        <Comment key={c.id} creator={c.creator}>
                            {c["content"]}
                        </Comment>
                    );
                })}

            <InputComment setComments={setComments} pin_id={props.pin_id} />
        </div>
    );
}
