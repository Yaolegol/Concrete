// @flow
import { USER_ACTION_TYPES } from "pages/User/constants";

const initialState = {
    user: {},
};

const { GET_USER_FAIL, GET_USER_START, GET_USER_SUCCESS } = USER_ACTION_TYPES;

export const userReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};
