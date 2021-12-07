import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css";

//  import '../Home/pin.css'

const media = localStorage.getItem('media')
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
              src={`${media}${props.image}`}
              alt='pin'
            />
            <div className='overlay'>
            
            </div>
            <p style={{fontSize:'14px',fontWeight:'bold'}}>{props.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinDisplay;
