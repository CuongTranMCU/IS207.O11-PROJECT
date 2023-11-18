import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/authen";

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