import { useEffect, useState } from "react";
import { getListUser } from "../../../services/adminService";
import React from 'react';
import "./style.css"
import EditUser from "./EditUser";
import NewUser from "./NewUser";
import DeleteUser from "./DeleteUser";

function UserCRUD(){
    const [user,setUser]= useState([]);
    const fetchApi = async ()=>
    {
        const user = await getListUser();
        setUser(user.data);  
     }
    useEffect(()=>
    {
        fetchApi();
    },[]);
    return(
        <>
        <div className="userTable">
        <h2 >Danh sách người dùng</h2>
        <NewUser ></NewUser>
        <table>
            <tr >
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
                        <EditUser></EditUser>
                        <DeleteUser></DeleteUser>
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