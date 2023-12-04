export const addtoCart =(id,item,quantity)=>
{
    return{
        type:"ADD",
        id : id,
        item: item,
        quantity: quantity
    }
}