import { useEffect, useState } from "react";
import { getListUser } from "../../../services/adminService";

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
        {
           user.map(item=>
            (
                <div className="user" key= {item.id}>{item.email}</div>
                
            ))
        }

        </>
    )
}
export default UserCRUD;