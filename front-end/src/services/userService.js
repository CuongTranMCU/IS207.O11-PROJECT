import { get, post } from "../utils/request"

export const login =(email,password)=>
{
    return get(`/users?email=${email}&password=${password}`);
}
export const checkExistEmail =(email)=>
{
    return get(`/users?email=${email}`)
}
export const createAccount =(user)=>
{
    return post(user,"/users")
}