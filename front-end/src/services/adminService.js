import { get,post,patch, del } from "../utils/request";

export const getListUser= ()=>
{
    return get("/api/admin/allUsers");

}
export const getListOrder =()=>
{
    return get("/api/transactions");
}
export const getListProduct =()=>
{
    return get("/api/products");
}
export const createNewUser =(user)=>
{
    return post(user,"/api/createUser")
}
export const createNewProduct=(product)=>
{
    return post(product,"/api/products")
}
export const  editUser =(user,id)=>
{
    return patch(user,id,"/api/user");
}
export const editProduct=(product,id)=>
{
    return patch(product,id,"/api/products")
}
export const deleteUser=(id)=>
{
    return del(id,"/api/users");
}
export const deleteProduct=(id)=>
{
    return del(id,"/api/products")
}