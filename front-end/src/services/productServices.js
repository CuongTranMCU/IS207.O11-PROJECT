import {  get} from "../utils/request";

export const getListProduct=()=>
{
    return get("/products");
}
