import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { authenReducer } from "./auth";
const allReducer = combineReducers(
    {
        cartReducer, authenReducer
        // nhiều reducer khác...
    }
)
export default allReducer;