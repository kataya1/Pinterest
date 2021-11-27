import react from "react";
import { useParams } from "react-router-dom";
import PassingImg from './PassingImg'

const PinView = () => {

    let {Id} = useParams();

    return ( <PassingImg  pinId={Id}/> )
}
export default PinView