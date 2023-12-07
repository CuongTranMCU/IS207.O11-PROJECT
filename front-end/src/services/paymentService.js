import { getCookie } from "../helpers/cookie";
import { get, patch, post } from "../utils/request";
const DOMAIN="http://127.0.0.1:8000";

export const del = async(path)=>
{
    const response = await fetch(`${DOMAIN}${path}`,
    {
    method:"DELETE",
    headers:{
        "Authorization": `Bearer ${getCookie("token")}`
    }
    }); 
    return response.ok; 
}
export const  createTransaction = (data)=>
{
    return post(data,"/api/transactions");
}
export const PaymentCodPage = (id)=>
{
    return post(id,"/api/payment_cod");
}
export const PaymentMomoPage = (id)=>
{
    return post(id,"/api/payment_momo");
}
export const getTransaction = (id)=>
{
    return get(`/api/transactions/${id}`)
}
export const getSelectedItems = (id,status)=>
{
    return get(`/api/cart?userId[eq]=${id}&status[eq]=${status}`);
}
export const createOrder = (array) =>
{
    return post (array,`/api/orders/bulk`);
}
export const updateStatusTransaction = (data,id)=>
{
    return patch(data,id,`/api/transactions`);
}
export const deleteCart = (id) =>
{
    return del(`/api/cart/bulkdestroy?userId[eq]=${id}&status[eq]=1`);
}
export const getUserTransaction = (id)=>
{
    return get(`/api/user/${id}/transactions`)
}