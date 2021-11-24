
import React from "react";
import { useParams } from "react-router-dom";


const PinView = () => {
    let {Id} = useParams();
    return ( <h1>{Id}</h1> );
}
 
export default PinView;