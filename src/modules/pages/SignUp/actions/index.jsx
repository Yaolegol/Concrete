// @flow
import { SIGNUP_ACTION_TYPES } from "pages/SignUp/constants";
import { registrationRequest } from "pages/SignUp/service";

const { SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } = SIGNUP_ACTION_TYPES;

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
