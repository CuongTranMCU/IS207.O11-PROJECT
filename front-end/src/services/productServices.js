import {  get} from "../utils/request";

export const getListProductPage=(page)=>
{
    return get(`/products?page=${page}`);
}
export const getProductDetail=(id)=>
{
    return get(`/products?id=${id}`);
}
export const getListCategoryProduct=(categoryId)=>
{
    return get(`/products?categoryId=${categoryId}`);
}