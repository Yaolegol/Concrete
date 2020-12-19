// @flow
import { COMMON_ACTION_TYPES } from "common/constants";

const {
    GET_USER_FAIL,
    GET_USER_START,
    GET_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT,
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
    user: {},
};

export const commonReducer = (state = initialState, action) => {
    const { data, type } = action;

    switch (type) {
        case GET_USER_FAIL:
            return {
                ...state,
            };
        case GET_USER_START:
            return {
                ...state,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...data,
                },
            };
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
        case LOGOUT:
            return {
                ...state,
                user: {},
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
