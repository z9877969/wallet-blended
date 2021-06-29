import { useDispatch } from "react-redux";
import { logOutAction } from "../../redux/auth/authAction";

const LogOut = () => {
    const dispatch = useDispatch()
    const handleLogOut = () => dispatch(logOutAction())
    return (
        <button type="button" onClick={handleLogOut} >LogOut</button>
    );
}
 
export default LogOut;