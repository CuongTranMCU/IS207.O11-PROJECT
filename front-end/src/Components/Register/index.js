import { Link, useNavigate } from "react-router-dom";
import { checkExistEmail, createAccount } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";
import "./Register.css";

function Register(){
    const navigate = useNavigate();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        // const user = await checkExistEmail(email);
        // console.log(user);
        // if(user.length >0 )
        // {
        //     alert(" Email đã tồn tại");
        // }
        // else
        // {
            // const token = generateToken();
            const newAccount = {
                email: email,
                password : password
            }
            console.log(newAccount);
            // 
            const response = await createAccount(newAccount);

            console.log(response);
            if(response.message.length >0)
            {
                alert("Đăng kí thành công, vui lòng đăng nhập");
                navigate("/login");
            }
            else
            {
                alert("Đăng kí thất bại");
            }
        // }
    }
   
    return(
        <>
        <div className="container">
            <div className="register">
                <h3 className="register__title">Đăng ký</h3>
                <form onSubmit={handleSubmit} className="register__form">
                    <div className="register__email">
                        <input type="email" name="email" placeholder="Email" required></input>
                        <i class="fa-solid fa-user"></i>
                    </div>   

                    <div className="register__password">
                        <input type="password" name="password" placeholder="Password" required></input>
                        <i class="fa-solid fa-lock"></i>
                    </div>                 

                    <button className="button login__button">Đăng ký</button>
                </form>
            </div>
            
        </div>
        </>
    )

}
export default Register;