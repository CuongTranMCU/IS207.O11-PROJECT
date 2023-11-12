import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/authen";

function Logout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();
    useEffect(()=>
    {
        dispatch(authen(false));
        navigate("/");
    },[]);

    return(
        <>
        </>
    )

}
export default Logout;