import {  get} from "../utils/request";

export const getListProductPage=(page)=>
{
    return get(`/api/products?page=${page}`);
}
export const getProductDetail=(id)=>
{
    return get(`/api/products?id=${id}`);
}
export const getListCategoryProduct=(categoryId)=>
{
    return get(`/api/products?categoryId=${categoryId}`);
}
