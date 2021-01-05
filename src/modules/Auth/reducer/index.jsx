// @flow
import { AUTH_ACTION_TYPES } from "modules/Auth/constants";

const {
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
} = AUTH_ACTION_TYPES;

const initialState = {
    auth: {
        errors: [],
        token: "",
    },
};

export const authReducer = (state: any = initialState, action: any): any => {
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
        case LOGOUT:
            return {
                ...state,
                user: {},
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
