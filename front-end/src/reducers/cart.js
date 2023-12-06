export const cartReducer =(state = [] ,action)=>
{    const newState=[...state];

    switch(action.type)
    {
        case "ADD":
            return [
                ...newState,
                {
                        quantity:1
                }
            ]
        default:
            return state;
            
    }
}