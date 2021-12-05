import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Likesvg } from "./like.svg";
import { ReactComponent as Heartsvg } from "./heart.svg";
import { ReactComponent as Commentsvg } from "./comment.svg";
import { ReactComponent as Dottedsvg } from "./dotted.svg";
import styles from "./Comment.module.css";

const media = localStorage.getItem("media");


export default function Comment(props) {
    return (
        <div className={`row ${styles.comment}`} style={{ width: "100%" }}>
            {/* avatar */}
            <div className="col-auto">
                <Link to={`/user/${props.creator.id}`}>
                    <img
                        src={`${media}${props.creator.avatar}`}
                        alt=""
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            float: "left",
                        }}
                    />
                </Link>
            </div>

            <div className="col">
                <div className={styles["comment-msg"]}>
                    <h5>
                        {props.creator.username}
                    </h5>
                    <p>
                    {props.children}

                    </p>
                </div>
                <div className={`${styles["comment-reactbar"]}`}>
                    <div className="d-flex">
                        <div className="heart-emoji px-1">
                            <Heartsvg />
                        </div>
                        <div className="comment-icon px-1">
                            <Commentsvg />
                        </div>
                        <div className="dotted-icon px-1">
                            <Dottedsvg />
                        </div>
                        <div className="px-1" style={{ marginLeft: "56%" }}>
                            <div className="like-icon">
                                <Likesvg /> &nbsp;Helpful
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
