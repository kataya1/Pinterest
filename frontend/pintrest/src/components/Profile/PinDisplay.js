import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css";

// import '../Home/pin.css'

const PinDisplay = props => {
  return (
    <div className='pins'>
      <div className='pin'>
        <div className='pin-image '>
          <Link
            to={`/pin/${props.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              id='LegendaryImage'
              src={`http://localhost:8000${props.image}`}
              alt='pin'
            />

            <p className='title'>{props.desc}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinDisplay;
