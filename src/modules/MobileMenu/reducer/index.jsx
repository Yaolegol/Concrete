// @flow
import { MOBILE_MENU_ACTION_TYPES } from "modules/MobileMenu/constants";

const { TOGGLE } = MOBILE_MENU_ACTION_TYPES;

const initialState = {
    isShow: false,
};

export const mobileMenuReducer = (
    state: any = initialState,
    action: any
): any => {
    const { type } = action;

    switch (type) {
        case TOGGLE:
            return {
                ...state,
                isShow: !state.isShow,
            };
        default:
            return state;
    }
};
