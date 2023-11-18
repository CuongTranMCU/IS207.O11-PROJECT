import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginadmin } from "../../../services/userService";
import { setCookie } from "../../../helpers/cookie";
import { authen } from "../../../actions/authen";

function LoginAdmin(){
    const navigate= useNavigate();  
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const admin =
        {
            email: email,
            password: password
        }
        const data = await  loginadmin(admin);
        if(data.message === "Admin login successfully")
        {   
            alert("Đăng nhập thành công");
            const email= admin.email;
            const token = data.token;
            console.log(token);
            console.log(token);
            const exDays= 2;
            setCookie("email",email,exDays);
            setCookie("token",token,exDays);
            dispatch(authen(true));
            navigate("/admin");
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
export default LoginAdmin;