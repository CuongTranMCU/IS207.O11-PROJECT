import { Link, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import "./style.css"
import { useSelector } from "react-redux";
function LayoutDefaultAdmin()
{
    const token = getCookie("token");
    const auth = useSelector(state =>state.authenReducer); 

    return(
        <>
        <div className="admin">
            <div className="admin__title" >
                <div className="admin__name">Admin</div>
                <Link to ="/admin" className="header__link" >
                <div className="admin__dashboard">Dashboard</div></Link>
                <Link to ="/admin/user" className="header__link" >
                <div className="admin__users--crud">Manage Users</div></Link>
                <Link to ="/admin/product" className="header__link" >
                <div className="admin__products--crud">Manage Products</div></Link>
                <Link to ="/admin/order" className="header__link" >
                <div className="admin__orders--crud">Manage Orders</div></Link>
              
            

            </div>
            <div className="admin__CRUD">
                {
                    token?(
                        <Outlet></Outlet>
                    ):(<></>)

                }
            
            </div>
        </div>

        </>
    )
}
export default LayoutDefaultAdmin;