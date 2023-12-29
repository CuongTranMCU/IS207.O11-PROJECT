import { resetPass } from "../../services/userService";
import "../Login/Login.css";

function ResetPassword(){
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const user =
        {
            email: email,
            password: e.target.elements.password.value,
            token:token
        }
        const data = await resetPass(user);
        if(data.message === "Change password success")
        {
            alert("Cập nhật mật khẩu mới thành công");
        }
        else 
        {
            alert("Cập nhật mật khẩu thất bại!")
        }
        window.location.href = `login`;
        console.log(data);
        
    }
    return(
        <>
        <div className="container">
            <div className="login">
                <h3 className="login__title">Reset New Password</h3>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__email">
                        <input type="email" name="email" placeholder="Email" defaultValue={email} disabled></input>
                        <i class="fa-solid fa-user"></i>
                    </div> 
                    <div className="login__password">
                        <input type="password" name="password" placeholder="New Password" required></input>
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