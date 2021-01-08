import { adminReducer } from "modules/Admin/reducer";
import { authReducer } from "modules/Auth/reducer";
import { cartReducer } from "modules/Cart/reducer";
import { localeReducer } from "modules/Locale/reducer";
import { mobileMenuReducer } from "modules/MobileMenu/reducer";
import { shopReducer } from "modules/Shop/reducer";
import { userReducer } from "modules/User/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    cart: cartReducer,
    locale: localeReducer,
    mobileMenu: mobileMenuReducer,
    shop: shopReducer,
    user: userReducer,
});
