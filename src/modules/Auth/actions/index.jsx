// @flow
import { AUTH_ACTION_TYPES } from "modules/Auth/constants";
import { loginRequest, registrationRequest } from "modules/Auth/service";

const {
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
} = AUTH_ACTION_TYPES;

const actionLoginFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: LOGIN_FAIL });
};
const actionLoginStart = () => (dispatch) => {
    dispatch({ type: LOGIN_START });
};
const actionLoginSuccess = (data) => (dispatch) => {
    dispatch({ data, type: LOGIN_SUCCESS });
};

export const actionLogin = ({ data: userData }: any): any => async (
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

export const actionLogout = (): any => (dispatch, getState) => {
    localStorage.removeItem("token");
    window.location.href = "/";
    dispatch({ type: LOGOUT });
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

export const actionRegistration = ({ data: userData }: any): any => async (
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
