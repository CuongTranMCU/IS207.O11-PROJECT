export const cartReducer =(state = [],action)=>
{
    const newState = [...state];
    switch(action.type)
    {
        case "ADD":
            return [
                ...newState,
                {
                    id:action.id,
                    item:action.item,
                    quantity:1
                }
            ]
        default:
            return newState;
            
    }
}