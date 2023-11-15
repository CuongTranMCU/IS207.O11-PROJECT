import { useEffect, useState } from "react";
import { getListOrder, getListProduct } from "../../../services/adminService";

function OrderCRUD(){
    const [order,setOrder]= useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const order = await getListOrder();
            setOrder(order.data);  
         }
        fetchApi();
    },[]);
    return(
        <>
        {
           order.map(item=>
            (
                <div className="user" key= {item.id}>{item.name}</div>
                
            ))
        }

        </>
    )
}
export default OrderCRUD;