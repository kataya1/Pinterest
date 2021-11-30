import React from "react";
import styles from "./Userinfolistitem.module.css";

export default function Userinfolistitem({ avatarsrc, username, email }) {
  return (
    <div className={styles.userdiv}>
      <div className={styles.avatarcont}>
        <img src={avatarsrc} alt='profile' />
      </div>
      <div className={styles.info}>
        <p>{username}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
}
