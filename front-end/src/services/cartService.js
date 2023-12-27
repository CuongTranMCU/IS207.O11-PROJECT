import { getCookie } from "../helpers/cookie";
import { del, get, post } from "../utils/request";
const DOMAIN="http://127.0.0.1:8000";
const patchCart=async(item,path)=>
{
    const response = await fetch(`${DOMAIN}${path}`,
            {
            method:"PATCH",
            headers:{
                "Accept": 'application/json',
                "Content-Type":"application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            },
            body:JSON.stringify(item)
        }); 
    return response.json();

}
export const createNewCart=(cart)=>
{
    return post(cart,"/api/cart");
}
export const getListCartByUserId=   (userId)=>
{
    return get(`/api/cart?userId[eq]=${userId}`);
}
export const updateCart = (updateCart)=>
{
    return patchCart(updateCart,"/api/cart");
}
export const deleteCart =(id)=>
{
    return del(id,"/api/cart/destroy");
}