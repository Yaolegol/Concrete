// @flow
import { COMMON_ACTION_TYPES } from "common/constants";
import { getUser, loginRequest, registrationRequest } from "common/service";
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

const actionGetUserFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: GET_USER_FAIL });
};
const actionGetUserStart = () => (dispatch) => {
    dispatch({ type: GET_USER_START });
};
const actionGetUserSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_USER_SUCCESS });
};

export const actionGetUser = () => async (dispatch, getState) => {
    dispatch(actionGetUserStart());

    try {
        const { data, errors } = await getUser();

        if (!errors) {
            dispatch(actionGetUserSuccess(data));
        } else {
            dispatch(actionGetUserFail(errors));
        }
    } catch (error) {
        dispatch(actionGetUserFail([error]));
    }
};

const actionLoginFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: LOGIN_FAIL });
};
const actionLoginStart = () => (dispatch) => {
    dispatch({ type: LOGIN_START });
};
const actionLoginSuccess = (data) => (dispatch) => {
    dispatch({ data, type: LOGIN_SUCCESS });
};

export const actionLogin = ({ data: userData }) => async (
    dispatch,
    getState
) => {
    dispatch(actionLoginStart());

    try {
        const { data, errors } = await loginRequest({
            data: userData,
        });

        if (!errors) {
            dispatch(actionLoginSuccess(data));
            localStorage.setItem("token", data.token);
        } else {
            dispatch(actionLoginFail({ errors }));
        }

        return { data, errors };
    } catch (error) {
        dispatch(actionLoginFail({ errors: error.message }));

        return { errors: [error.message] };
    }
};

export const actionLogout = () => (dispatch, getState) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
};

export const actionSelectLang = (lang: string) => (dispatch, getState) => {
    dispatch({ data: lang, type: SELECT_LANG });
};

export const actionShowMobileMenu = (isShow: boolean) => (
    dispatch,
    getState
) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU });
};

const actionSignUpFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: SIGNUP_FAIL });
};
const actionSignUpStart = () => (dispatch) => {
    dispatch({ type: SIGNUP_START });
};
const actionSignUpSuccess = (data) => (dispatch) => {
    dispatch({ data, type: SIGNUP_SUCCESS });
};

export const actionRegistration = ({ data: userData }) => async (
    dispatch,
    getState
) => {
    dispatch(actionSignUpStart());

    try {
        const { data, errors } = await registrationRequest({
            data: userData,
        });

        if (!errors) {
            dispatch(actionSignUpSuccess(data));
        } else {
            dispatch(actionSignUpFail({ errors }));
        }

        return { data, errors };
    } catch (error) {
        dispatch(actionSignUpFail({ errors: error.message }));

        return { errors: error };
    }
};
