import { useEffect, useState } from "react";
import React from 'react';
import { getListOrder } from "../../../services/adminService";
import Modal from 'react-modal';
import "../UserCRUD/style.css"
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
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
        <div className="orderTable">
        <h2 >Danh sách đơn hàng</h2>
        {/* <NewProduct></NewProduct> */}
        <table>
            <tr>
            <th>Id</th>
            <th>Số điện thoại</th>
            <th>Tổng tiền</th>
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
                    <td>{item.phone}</td>
                    <td>{item.totalMoney}</td>
                    <td>{item.status}</td>
                    <td>{item.createdAt}</td>
                    <td>

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