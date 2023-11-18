import {  get} from "../utils/request";

export const getListProductPage=(page)=>
{
    return get(`/api/products?page=${page}`);
}
export const getListNewProductPage=(page)=>
{
    return get(`/api/products?orderBy=createdAt-desc&page=${page}`)
}
export const getProductDetail=(id)=>
{
    return get(`/api/products?id=${id}`);
}
export const getListCategory=()=>
{
    return get("/api/categories");
}
export const getListCategoryProduct=(categoryId)=>
{
    return get(`/api/products?categoryId=${categoryId}`);
}