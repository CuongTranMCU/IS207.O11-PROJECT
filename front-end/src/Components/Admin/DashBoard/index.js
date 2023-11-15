import { useEffect, useState } from "react";
import { getListOrder, getListUser } from "../../../services/adminService";

function DashBoard(){
    const [user,setUser] = useState(0);
    const [order,setOrder] = useState(0);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const user = await getListUser();
            setUser(user.data.length);
            const order = await getListOrder();
            setOrder(order.data.length)
        }
        fetchApi();
    },[]);
    return(
        <>
        <div className="dashboard">
            <div className="dashboard__user">Số người dùng:{user}
                </div>
            <div className="dashboard__order">Số đơn hàng: {order}</div>
        </div>
        </>
    )
}
export default DashBoard;