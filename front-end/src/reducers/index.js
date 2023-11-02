import { combineReducers } from "redux";
import { cartReducer } from "./cart";
const allReducer = combineReducers(
    {
        cartReducer,
        // nhiều reducer khác...
    }
)
export default allReducer;