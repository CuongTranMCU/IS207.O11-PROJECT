import { useNavigate } from "react-router-dom";
import { checkExistEmail, createAccount } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";

function Register(){
    const navigate = useNavigate();
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const user = await checkExistEmail(email);
        console.log(user);
        if(user.length >0 )
        {
            alert(" Email đã tồn tại");
        }
        else
        {
            const token = generateToken();
            const newAccount = {
                email: email,
                password : password,
                token : token   
            }
            console.log(newAccount);
            const response = await createAccount(newAccount);
            if(response)
            {
                alert("Đăng kí thành công, vui lòng đăng nhập");
                navigate("/login");
            }
        }
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