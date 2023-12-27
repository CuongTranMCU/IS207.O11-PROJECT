import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../helpers/cookie";
import { login, newtPass } from "../../services/userService";
import { useDispatch } from "react-redux";
import { authen } from "../../actions/authen";
import "../Login/Login.css";

function ResetPassword(){
    const navigate= useNavigate();  
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const user =
        {
            email: email
        }
        const data = await  newtPass(user);
        console.log(data);
        if(data.message === "Success")
        {   
            alert("Xác nhận email");
        window.location.href = "https://mailtrap.io/inboxes/2509964/messages";
        }
        else
        {
            alert("Reset thất bại");
        }
    }
    return(
        <>
        <div className="container">
            <div className="login">
                <h3 className="login__title">Reset Password</h3>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__email">
                        <input type="email" name="email" placeholder="Email" required></input>
                        <i class="fa-solid fa-user"></i>
                    </div>   

                    <div className="login__password">
                        <input type="password" name="password" placeholder="Password" required></input>
                        <i class="fa-solid fa-lock"></i>
                    </div> 

                                   

                    <button className="button login__button">Reset</button>
                </form>

            </div>
            
        </div>
        </>
    )

}
export default ResetPassword;