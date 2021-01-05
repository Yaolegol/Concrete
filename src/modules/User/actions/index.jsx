// @flow
import { USER_ACTION_TYPES } from "modules/User/constants";
import { getUser } from "modules/User/service";

const { GET_USER_FAIL, GET_USER_START, GET_USER_SUCCESS } = USER_ACTION_TYPES;

const actionGetUserFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: GET_USER_FAIL });
};
const actionGetUserStart = () => (dispatch) => {
    dispatch({ type: GET_USER_START });
};
const actionGetUserSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_USER_SUCCESS });
};

export const actionGetUser = (): any => async (dispatch, getState) => {
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
