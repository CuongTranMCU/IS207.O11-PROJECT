import { get } from "../utils/request";

export const getListUser= ()=>
{
    return get("/api/allUsers");

}
export const getListOrder =()=>
{
    return get("/api/transactions");
}
export const getListProduct =()=>
{
    return get("/api/products");
}