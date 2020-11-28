import { cartReducer } from "pages/Cart/reducer";
import { shopReducer } from "pages/Shop/reducer";
import { commonReducer } from "common/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cart: cartReducer,
    common: commonReducer,
    shop: shopReducer,
});
