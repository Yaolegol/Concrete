import { commonReducer } from "common/reducer";
import { authReducer } from "modules/Auth/reducer";
import { cartReducer } from "pages/Cart/reducer";
import { shopReducer } from "pages/Shop/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    common: commonReducer,
    shop: shopReducer,
});
