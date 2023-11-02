export const addtoCart =(id,item)=>
{
    return{
        type:"ADD",
        id : id,
        item: item
    }
}