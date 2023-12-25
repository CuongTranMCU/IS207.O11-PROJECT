import { useEffect, useState } from "react";
import React from 'react';
import { getListOrder, getListTrans } from "../../../services/adminService";
import "../UserCRUD/style.css"
import EditOrder from "./EditOrder";
import DeleteOrder from "./DeleteOrder";
function OrderCRUD(){
    const [order,setOrder]= useState([]);
    const [transaction,setTransaction] = useState([]);
    const fetchApi = async ()=>
        {
            const order = await getListOrder();
            setOrder(order.data);
            const transaction = await getListTrans();
            setTransaction(transaction.data);
         }
    useEffect(()=>
    {
        fetchApi();
    },[]);
    const handleReload =()=>
    {
        fetchApi();
    }
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
    const convertNumStatus = (id)=>
    {
        for (let i = 0 ;i< transaction.length; i++)
        {
            if (transaction[i].id === id )
            {
              return transaction[i].status;
            
            }
        }
    }
    return(
        <>
        <div className="orderTable">
        <h2 >Danh sách đơn hàng</h2>
        <table>
            <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Ngày cập nhật</th>
            <th>Action</th>
            </tr>
        {
           order.map(item=>
            {
                return(
                <tr className="order" key= {item.id}>
                    <td>{item.id}</td>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.productPrice}</td>
                    <td>{convertStatus(item.transactionId)}</td>
                    <td>{item.createdAt}</td>
                    <td>
                    <EditOrder  status = {convertNumStatus(item.transactionId)}  item ={item} reload ={handleReload}></EditOrder>
                    <DeleteOrder item={item} reload ={handleReload}></DeleteOrder>
                    </td>

                </tr>
               
                );
                
                })
        }
            </table>
            
        </div>

        </>
    )
}
export default OrderCRUD;