import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getUserTransaction } from "../../services/paymentService";

function MyOrder()
{
    const [transaction,setTransaction] = useState([]);
    const [orders,setOrders] = useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
    {
        const data = await getUserTransaction(getCookie("userId"));
        setTransaction(data.data);
        console.log(data.data); 
        for (let i = 0 ;i < transaction.length;i++)
        {
        const order = await 
        }


    }
    fetchApi();
       
    },[]);
    return(
        <>
        <div className="container">
            <div className="checkout">
            <h2>ĐƠN HÀNG CỦA TÔI</h2>
            </div>
      
        </div>
        </>
    )
}
export default MyOrder;