import { useParams } from "react-router";
import Github from "../Github/Github";

function User() {
    const {userid} = useParams()
    return (
        <div>
            <div className="text-3xl bg-gray-700 text-white text-center p-4 m-4">User: {userid}</div>
            
        </div>
        
    )
}

export default User;