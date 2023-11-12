import {  get} from "../utils/request";

export const getListProduct=()=>
{
    return get("/products");
}
export const getProductDetail=(id)=>
{
    return get(`/products?id=${id}`);
}
