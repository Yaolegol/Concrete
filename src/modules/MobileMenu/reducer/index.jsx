// @flow
import { MOBILE_MENU_ACTION_TYPES } from "modules/MobileMenu/constants";

const { HIDE, SHOW } = MOBILE_MENU_ACTION_TYPES;

const initialState = {
    isShow: false,
};

export const mobileMenuReducer = (
    state: any = initialState,
    action: any
): any => {
    const { type } = action;

    switch (type) {
        case HIDE:
            return {
                ...state,
                isShow: false,
            };
        case SHOW:
            return {
                ...state,
                isShow: true,
            };
        default:
            return state;
    }
};
