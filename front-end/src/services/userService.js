import { post } from "../utils/request"

export const login =(user)=>
{
    return post(user,"/login");
}

export const createAccount =(user)=>
{
    return post(user,"/register")
}
export const loginadmin =(admin)=>
{
    return post(admin,"/admin/login");
}
export const forgetPass = (data)=>
{
    return post(data,"/forget-password");
}
export const resetPass = (data)=>
{
    return post(data,"/reset-password");
}