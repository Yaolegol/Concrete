// @flow
import { COMMON_ACTION_TYPES } from "common/constants";
import { registrationRequest } from "common/service";
const {
    SELECT_LANG,
    SHOW_MOBILE_MENU,
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
} = COMMON_ACTION_TYPES;

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
        console.log("data");
        console.log(data);
        console.log("errors");
        console.log(errors);

        // if (!errors) {
        //     dispatch(actionSignUpSuccess(data));
        // } else {
        //     dispatch(actionSignUpFail(errors));
        // }
    } catch (error) {
        // dispatch(actionSignUpFail([error]));
    }
};
