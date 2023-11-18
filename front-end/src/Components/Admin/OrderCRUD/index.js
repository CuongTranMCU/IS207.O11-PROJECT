import { useEffect, useState } from "react";
import { getListOrder, getListProduct } from "../../../services/adminService";
import "../UserCRUD/style.css"
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
                        <button>Edit</button>
                        <button>Delete</button>
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