import { forgetPass } from "../../services/userService";
import "../Login/Login.css";

function ForgetPassword(){
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const user =
        {
            email: email
        }
        const data = await  forgetPass(user);
        console.log(data);
        if(data.message === "Success")
        {   
            alert("Xác nhận email");
        window.location.href = "https://mailtrap.io/inboxes";
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
                <h3 className="login__title">Forget Password</h3>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__email">
                        <input type="email" name="email" placeholder="Email" required></input>
                        <i class="fa-solid fa-user"></i>
                    </div>   
                    <button className="button login__button">Submit</button>
                </form>

            </div>
            
        </div>
        </>
    )

}
export default ForgetPassword;