// @flow
import { ADMIN_ACTION_TYPES } from "modules/Admin/constants";

const {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    GET_PURCHASES_FAIL,
    GET_PURCHASES_START,
    GET_PURCHASES_SUCCESS,
} = ADMIN_ACTION_TYPES;

const initialState = {
    purchases: [],
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
        case GET_PURCHASES_FAIL:
            return {
                ...state,
            };
        case GET_PURCHASES_START:
            return {
                ...state,
            };
        case GET_PURCHASES_SUCCESS:
            return {
                ...state,
                purchases: data,
            };
        default:
            return state;
    }
};
