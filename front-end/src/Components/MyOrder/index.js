import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListOrderByTransactionId, getUserTransaction, updateStatusTransaction } from "../../services/paymentService";

function MyOrder()
{
    const [transaction,setTransaction] = useState([]);
    const [orders,setOrders] = useState([]);
    const fetchApi = async ()=>
    {
        const data = await getUserTransaction(getCookie("userId"));
        setTransaction(data.data);
        console.log(data.data); 
        const newOrders = [];
        for (let i = 0 ;i < data.data.length;i++)
        {
        const order = await getListOrderByTransactionId(data.data[i].id);
        newOrders.push(...order.data);
        }
        setOrders(newOrders);
   }
    useEffect(()=>
    {
    fetchApi();
       
    },[]);
    console.log(orders);
    const convertStatus = (id)=>
    {
        for (let i = 0 ;i< transaction.length; i++)
        {
            if (transaction[i].id === id )
            {
                if(transaction[i].status === 0 )
                {
                    return "Chưa mua hàng";
                }
                else if(transaction[i].status === 1 || transaction[i].status === 9)
                {
                    return "Đang giao hàng";
                }
                else if(transaction[i].status === 2)
                {
                    return "Đã nhận đơn hàng";
                }
                else if(transaction[i].status === 3)
                {
                    return "Đã hủy đơn hàng";
                }
                else 
                {
                    return "Đơn hàng không xác định";
                }
            
            }
        }
    }
    const handleReceive =  async (id)=>
    {
        const updateData = 
        {
            userId: getCookie("userId"),
            status: 2,
        }
        const updatetrans = await updateStatusTransaction(updateData,id);
        fetchApi();
    }
    const handleCancle = async (id)=>
    {
        const updateData = 
        {
            userId: getCookie("userId"),
            status: 3,
        }
        await updateStatusTransaction(updateData,id);
        fetchApi();
    }
    return(
        <>
        <div className="container">
            <div className="my-order">
            <h2>ĐƠN HÀNG CỦA TÔI</h2>
            </div>
            <div className="cart__list">
                        {
                            orders.map(it=>
                            {
                                // const discount=parseInt(it.item.discountPercentage).toFixed(0);
                                //  const newPrice = (it.item.price*(100-discount)/100).toFixed(0);
                                 return (
                                    <div className={"cart__item"} key={it.productId}>
                                       <div className="cart__image">
                                           <img src={it.imgPath} alt={it.productName}></img>
                                       </div>
                                       <div className="cart__content">
                                           <div className="cart__title">{it.productName}</div>
                                           <div className="cart__new-price">{it.productPrice}đ</div>
                                           <div className="cart__quantity">Số lượng: {it.quantity}</div>
                                           <div className="cart__status">Trạng thái: {convertStatus(it.transactionId)}</div>
                                       </div>
                                       <div className="order__adjust">
                                        {
                                           (convertStatus(it.transactionId) !== "Đã nhận đơn hàng" && convertStatus(it.transactionId) !== "Đã hủy đơn hàng" )  ?<> <button onClick={()=> handleReceive(it.transactionId)}>Đã nhận được hàng</button></>:<></>
                                        }
                                       </div>
                                       <div className="order__adjust">
                                        {
                                              (convertStatus(it.transactionId) !== "Đã nhận đơn hàng" && convertStatus(it.transactionId) !== "Đã hủy đơn hàng" ) ?<> <button onClick={()=> handleCancle(it.transactionId)}>Hủy đơn hàng</button></>:<></>
                                        }
                                        </div>
                                    
                                   </div>
                               );

                            })

                        }
                        </div>
      
        </div>
        </>
    )
}
export default MyOrder;