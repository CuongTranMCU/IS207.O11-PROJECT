import { get, post } from "../utils/request";

export const createNewCart=(cart)=>
{
    return post(cart,"/api/cart");
}
export const getListCartByUserId=   (userId)=>
{
    return get(`/api/cart?userId[eq]=${userId}`);
}