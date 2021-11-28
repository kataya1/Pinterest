import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

const PassingUserId = () => {

    let {Id} = useParams();

    return ( <UserProfile  id={Id}/> )
}
export default PassingUserId;
