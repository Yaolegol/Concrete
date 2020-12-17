// @flow
import { COMMON_ACTION_TYPES } from "common/constants";

const {
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    SELECT_LANG,
    SHOW_MOBILE_MENU,
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
} = COMMON_ACTION_TYPES;

const initialState = {
    auth: {
        errors: [],
        token: "",
    },
    locale: {
        current: "en",
    },
    mobileMenu: {
        isShow: false,
    },
};

export const commonReducer = (state = initialState, action) => {
    const { data, type } = action;

    switch (type) {
        case LOGIN_FAIL:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    ...data,
                },
            };
        case LOGIN_START:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    errors: [],
                    ...data,
                },
            };
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
                auth: {
                    ...state.auth,
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
                auth: {
                    ...state.auth,
                    errors: [],
                    ...data,
                },
            };
        default:
            return state;
    }
};
