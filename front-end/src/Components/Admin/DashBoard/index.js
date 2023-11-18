import { useEffect, useState } from "react";
import { getListOrder, getListUser } from "../../../services/adminService";
import "./styles.css"
function DashBoard(){
    const [user,setUser] = useState([]);
    const [order,setOrder] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const user = await getListUser();
            setUser(user.data);  
            console.log(user);
            const order = await getListOrder();
            setOrder(order.data)
            console.log(order);
         }
        fetchApi();
    },[]);
    //
    return(
        <>
        <div className="dashboard">
            <div className="dashboard__user">Tổng người dùng
             <div className="dashboard__user--sum">{user.length}</div>
                </div>
            <div className="dashboard__order">Tổng đơn hàng
            <div className="dashboard__order--sum">{order.length}</div>
            </div>
        </div>
        </>
    )
}
export default DashBoard;