import { getCookie } from "../helpers/cookie";

const DOMAIN="http://127.0.0.1:8000";
export const get=async(path)=>
{
    const response = await fetch(DOMAIN+path,{
        headers:{
            "Authorization": `Bearer ${getCookie("token")}`
        }
    });
    return response.json();
}
export const post=async(item,path)=>
{
    const response = await fetch(DOMAIN+path,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            },
            body:JSON.stringify(item)
        });
    return response.json();
    
}
export const patch=async(item,id,path)=>
{
    const response = await fetch(`${DOMAIN}${path}/${id}`,
            {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            },
            body:JSON.stringify(item)
        }); 
    return response.json();

}
export const del = async(id,path)=>
{
    const response = await fetch(`${DOMAIN}${path}/${id}`,
    {
    method:"DELETE",
    headers:{
        "Authorization": `Bearer ${getCookie("token")}`
    }
    }); 
    return response.json(); 
}