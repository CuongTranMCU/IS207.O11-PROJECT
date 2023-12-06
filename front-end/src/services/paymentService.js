import { get, post } from "../utils/request";

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