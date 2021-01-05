// @flow
import { USER_ACTION_TYPES } from "modules/User/constants";

const { GET_USER_FAIL, GET_USER_START, GET_USER_SUCCESS } = USER_ACTION_TYPES;

const initialState = {
    user: {},
};

export const userReducer = (state: any = initialState, action: any): any => {
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
                    ...data.user,
                },
            };
        default:
            return state;
    }
};
