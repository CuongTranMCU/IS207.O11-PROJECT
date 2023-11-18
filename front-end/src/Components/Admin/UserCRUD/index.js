import { useEffect, useState } from "react";
import { getListUser } from "../../../services/adminService";
import "./style.css"
function UserCRUD(){
    const [user,setUser]= useState([]);
    useEffect(()=>
    {
        const fetchApi = async ()=>
        {
            const user = await getListUser();
            setUser(user.data);  
         }
        fetchApi();
    },[]);
    return(
        <>
        <div className="userTable">
        <h2 >Danh sách người dùng</h2>
        <table>
            <tr>
            <th>Id</th>
            <th>Tên hiển thị</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ngày cập nhật</th>
            <th>Action</th>
            </tr>
        {
           user.map(item=>
            (
                <tr className="user" key= {item.id}>
                    <td>{item.userId}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.createdAt}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>

                </tr>
                
            ))
        }
            </table>
        </div>

        </>
    )
}
export default UserCRUD;