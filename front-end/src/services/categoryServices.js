import { get } from "../utils/request";

export const getListCategory=()=>
{
    return get("/categories");
}