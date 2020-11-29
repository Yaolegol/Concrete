// @flow
import { COMMON_ACTION_TYPES } from "common/constants";

const initialState = {
    locale: {
        current: "en",
    },
    mobileMenu: {
        isShow: false,
    },
};

const { SELECT_LANG, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES;

export const commonReducer = (state = initialState, action) => {
    const { data, type } = action;

    switch (type) {
        case SELECT_LANG:
            return {
                ...state,
                locale: {
                    ...state.locale,
                    current: data,
                },
            };
        case SHOW_MOBILE_MENU:
            return {
                ...state,
                mobileMenu: {
                    ...state.mobileMenu,
                    ...data,
                },
            };
        default:
            return state;
    }
};
