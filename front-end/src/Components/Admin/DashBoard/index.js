import { useEffect, useState } from "react";
import { getListOrder, getListUser } from "../../../services/adminService";

function DashBoard(){
    const [user,setUser] = useState([]);
    const [order,setOrder] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const user = await getListUser();
            setUser(user.data);  
            const order = await getListOrder();
            setOrder(order.data)
         }
        fetchApi();
    },[]);
    //
    return(
        <>
        <div className="dashboard">
            <div className="dashboard__user">Số người dùng:{user.length}
                </div>
            <div className="dashboard__order">Số đơn hàng: {order.length}</div>
        </div>
        </>
    )
}
export default DashBoard;