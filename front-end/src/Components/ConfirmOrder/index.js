import { useLocation } from "react-router-dom";
import { queryStringToObject } from "../QueryURL";
import { useEffect, useMemo, useState } from "react";
import { PaymentMomoPage, createOrder, deleteCart, getSelectedItems, getTransaction, updateStatusTransaction } from "../../services/paymentService";
import { getCookie } from "../../helpers/cookie";

function ConfirmOrder(){

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const transactionId = params.get('transactionId');
    const [selectedItems,setSelectedItems] = useState([]);
    const [transaction,setTransaction]= useState([]);
    useEffect(()=>
    {
        
        const fetchApi = async ()=>
        {
            // console.log(transactionId);
            const transaction = await getTransaction(transactionId);
            console.log(transaction.data);
            setTransaction(transaction.data);
            const userId = getCookie("userId");
            const data = await getSelectedItems(userId,1);
            setSelectedItems(data.data);
            console.log(data);
        }
        fetchApi();
    },[])
    const total = selectedItems.reduce((total,it ) =>
    {
        
        return total + it.productPrice*it.quantity;
    },0);
    const handleSubmit = async ()=>
    {
        const array = [];
        for (let i = 0 ; i < selectedItems.length;i++)
        {
            const newObject = {};
        newObject.productId= selectedItems[i].productId;
        newObject.productName = selectedItems[i].productName;
        newObject.productPrice = selectedItems[i].productPrice;
        newObject.quantity = selectedItems[i].quantity;
        newObject.transactionId = transactionId;
        newObject.imgPath = selectedItems[i].imgPath;
        array.push(newObject);
        }
        console.log(array);
        const data = await createOrder(array);
        console.log(data);
        const updateData = 
        {
            userId: getCookie("userId"),
            status: 1,
        }
        console.log(updateData);
        const updatetrans = await updateStatusTransaction(updateData,transaction[0].id);
        console.log(updatetrans);
        const userId = getCookie("userId");
        const Cart = await deleteCart(userId);
        console.log(Cart);
        if(transaction[0].paymentMethod === 0)
        {
            window.location.href = `checkout`;
        }
        else
        {
            const trans = {
                        transactionId: transaction[0].id
                    }
                   const momo= await PaymentMomoPage(trans);
                   console.log(momo);
                   window.location.href = `${momo.payUrl}`;
        }
    }
    const convertMethod =(method)=>
    {
        if (method === 0 )
        {
            return "Thanh toán khi nhận hàng";
        }
        else 
        {
            return "Thanh toán bằng MOMO";
        }

    }
    return(
        <>
        <div className="container">
        <h2> XÁC NHẬN ĐƠN HÀNG</h2>

        <div>Tên người nhận: {transaction && transaction.length > 0 ? transaction[0].name : 'N/A'}</div>
        <div>Địa chỉ: {transaction && transaction.length > 0 ? transaction[0].address : 'N/A'}</div>
        <div>Số điện thoại: {transaction && transaction.length > 0 ? transaction[0].phone : 'N/A'}</div>
        <div>Tổng tiền: {total}đ</div>
        <div>Hình thức: { transaction && transaction.length > 0 ? convertMethod(transaction[0].paymentMethod):'N/A'}</div>
        <div className="cart__list">
                        {
                            selectedItems.map(it=>
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
                                       </div>
                                    
                                   </div>
                               );

                            })

                        }
                        </div>
                            <button onClick={handleSubmit}>Đặt Hàng</button>     
                        </div>
        </>
    )
}
export default ConfirmOrder;
