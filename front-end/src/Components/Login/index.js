import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/authen";
import "./Login.css";

function Login(){
    const navigate= useNavigate();  
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const user =
        {
            email: email,
            password: password
        }
        console.log(user);
        const data = await  login(user);
        console.log(data);
        if(data.message === "Login Success")
        {   
            alert("Đăng nhập thành công");
            const email = user.email;
            const token = data.token;
            const userId = data.userId;
            const exDays= 2;
            setCookie("email",email,exDays);
            setCookie("token",token,exDays);
            setCookie("userId",userId);
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
        <div className="container">
            <div className="login">
                <h3 className="login__title">Đăng nhập</h3>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__email">
                        <input type="email" name="email" placeholder="Email" required></input>
                        <i class="fa-solid fa-user"></i>
                    </div>   

                    <div className="login__password">
                        <input type="password" name="password" placeholder="Password" required></input>
                        <i class="fa-solid fa-lock"></i>
                    </div> 

                    <div className="login__forgotpass">
                        <Link to="#">Forgot Password?</Link>
                    </div>                

                    <button className="button login__button">Đăng nhập</button>
                </form>

                <div className="login__register">Don't have an account? <Link to="../sign-up">Register</Link></div>
            </div>
            
        </div>
        </>
    )

}
export default Login;