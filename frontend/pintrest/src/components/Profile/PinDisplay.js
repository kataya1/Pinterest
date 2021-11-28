import React from 'react';

// import '../Home/pin.css'

const PinDisplay = (props) => {
    
    return ( 
    <div className="pins" >
        <div className="pin">
            <div className="pin-image" >
            <img src={`http://localhost:8000${props.image}`}  
            />
            <p className='title' >{props.desc}</p>    
            </div>
           
        </div>
    </div>

     );
}
 
export default PinDisplay;