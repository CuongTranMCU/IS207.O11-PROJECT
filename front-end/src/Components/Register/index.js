import { useNavigate } from "react-router-dom";
import {  createAccount } from "../../services/userService";

function Register(){
    const navigate = useNavigate();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
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
        <div className="container register">
            <h3 className="register__title">ĐĂNG KÍ</h3>
            <form onSubmit={handleSubmit} className="register__form">
                <input type="email" name="email" placeholder="Email" required></input><br></br>
                <input type="password" name="password" placeholder="Password" required></input><br></br>
                <button className="button login__button">Đăng kí</button>
            </form> 
        </div>
        </>
    )

}
export default Register;