const initialState = {
    cartLength: 0
  };
export const cartReducer = (state = initialState ,action)=>
{   
    switch(action.type)
    {
        case "ADD":
        return {
            ...state,
            cartLength: action.length
          };
        default:
          return state;
            
    }
}