// @flow
import { SHOP_ACTION_TYPES } from "modules/Shop/constants";

const initialState = {
    filters: {},
    errors: [],
    loading: false,
    currentPage: 1,
    products: {
        count: 0,
        list: [],
    },
    sort: {},
};

const {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    RESET_PAGE,
    RESET_PRODUCTS_FILTERS,
    RESET_PRODUCTS_SORTS,
    SET_PAGE,
    SET_PRODUCTS_FILTER,
    SET_PRODUCTS_SORT,
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
                    list: data.isAdditional
                        ? [...state.products.list, ...data.list]
                        : [...data.list],
                },
            };
        case RESET_PAGE:
            return {
                ...state,
                currentPage: initialState.currentPage,
            };
        case RESET_PRODUCTS_FILTERS:
            return {
                ...state,
                filters: initialState.filters,
            };
        case RESET_PRODUCTS_SORTS:
            return {
                ...state,
                sort: initialState.sort,
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: data,
            };
        case SET_PRODUCTS_FILTER:
            return {
                ...state,
                filters: { ...state.filters, ...data },
            };
        case SET_PRODUCTS_SORT:
            return {
                ...state,
                sort: { ...state.sort, ...data },
            };
        default:
            return state;
    }
};
