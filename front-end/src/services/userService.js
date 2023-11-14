import { get, post } from "../utils/request"

export const login =(user)=>
{
    return post(user,"/login");
}
export const checkExistEmail =(email)=>
{
    return get(`/users?email=${email}`)
}
export const createAccount =(user)=>
{
    return post(user,"/register")
}