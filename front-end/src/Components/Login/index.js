import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { authen } from "../../actions/authen";

function Login(){
    const navigate= useNavigate();  
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const user = await  login(email,password);

        if(user.length >0)
        {   
            alert("Đăng nhập thành công");
            const {email,token} = user[0];
            const exDays= 2;
            setCookie("email",email,exDays);
            setCookie("token",token,exDays);
            dispatch(authen(true));
            navigate("/");
        }
        else
        {
            alert("Đăng nhập thất bại");

        }
    }
    return(
        <>
        <div className="login__form container">
            <h3 className="login__title">ĐĂNG NHẬP</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required></input><br></br>
                <input type="password" name="password" placeholder="Password" required></input><br></br>
                <button className="button login__button">Đăng nhập</button>
            </form>
        </div>
        </>
    )

}
export default Login;