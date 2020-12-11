import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";

const reducer = combineReducers({
    product,
    cart
});

export default reducer;