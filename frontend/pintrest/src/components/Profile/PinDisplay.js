import axios from "axios";
import React from 'react';

 
const PinDisplay = (props) => {
    
    return ( 
    <div className='pins'  >
        <div className='pin'>
            <div className='pin-image' >
            <img src={`http://localhost:8000${props.image}`}/>
           </div>

            <p className='title' >{props.desc}</p>
           
        </div>
    </div>

     );
}
 
export default PinDisplay;