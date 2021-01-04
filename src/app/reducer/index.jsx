import { commonReducer } from "common/reducer";
import { authReducer } from "modules/Auth/reducer";
import { cartReducer } from "modules/Cart/reducer";
import { shopReducer } from "modules/Shop/reducer";
import { userReducer } from "modules/User/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    common: commonReducer,
    shop: shopReducer,
    user: userReducer,
});
