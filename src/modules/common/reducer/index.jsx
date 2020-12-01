// @flow
import { COMMON_ACTION_TYPES } from "common/constants";

const {
    SELECT_LANG,
    SHOW_MOBILE_MENU,
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
} = COMMON_ACTION_TYPES;

const initialState = {
    locale: {
        current: "en",
    },
    mobileMenu: {
        isShow: false,
    },
    registration: {
        errors: [],
        token: "",
    },
};

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
        case SIGNUP_FAIL:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    ...data,
                },
            };
        case SIGNUP_START:
            return {
                ...state,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    errors: [],
                    ...data,
                },
            };
        default:
            return state;
    }
};
