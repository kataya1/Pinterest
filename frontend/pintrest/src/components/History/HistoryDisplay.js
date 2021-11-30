import React from "react";
import { Link } from "react-router-dom";
import styles from "./history.module.css";

const PinDisplay = props => {
  return (
    <div className={styles.pins}>
      <div className={styles.pin}>
        <Link
          to={`/pin/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={styles.pin_image}>
            <img
              src={`http://localhost:8000${props.image}`}
              onMouseOver={props.onMouseEnterHandler}
              onMouseOut={props.onMouseLeaveHandler}
              alt='pine'
            />

            <div
              className={styles.overlay}
              onClick={e => props.saveHistory(e, props.id)}
            ></div>
          </div>
        </Link>
        <p className={styles.time}>{props.time}</p>
        <div className={styles.turnoff}>
          <input
            type='submit'
            href='#'
            onClick={e => props.onClickHandler(e, props.id)}
            value='Turn Off'
            className='btn btn-light'
          />
        </div>
      </div>
    </div>
  );
};

export default PinDisplay;
