// @flow
import { ADMIN_ACTION_TYPES } from "modules/Admin/constants";

const {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
} = ADMIN_ACTION_TYPES;

const initialState = {
    admin: {},
};

export const adminReducer = (state: any = initialState, action: any): any => {
    const { data, type } = action;

    switch (type) {
        case CREATE_PRODUCT_FAIL:
            return {
                ...state,
            };
        case CREATE_PRODUCT_START:
            return {
                ...state,
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
};
