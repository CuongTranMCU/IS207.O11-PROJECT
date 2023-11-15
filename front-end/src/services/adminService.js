import { get } from "../utils/request";

export const getListUser= ()=>
{
    return get("/admin/allUsers");

}
export const getListOrder =()=>
{
    return get("/admin/orders");
}