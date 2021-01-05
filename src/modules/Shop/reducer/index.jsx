// @flow
import { SHOP_ACTION_TYPES } from "modules/Shop/constants";

const initialState = {
    errors: [],
    loading: false,
    products: {
        count: 0,
        list: [],
    },
};

const {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
} = SHOP_ACTION_TYPES;

export const shopReducer = (state: any = initialState, action: any): any => {
    const { data, type } = action;

    switch (type) {
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                errors: [...state.errors, ...data],
                loading: false,
            };
        case GET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: {
                    ...state.products,
                    ...data,
                },
            };
        default:
            return state;
    }
};
