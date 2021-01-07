// @flow
import { SHOP_ACTION_TYPES } from "modules/Shop/constants";
import {
    selectCurrentPage,
    selectProductsFilters,
    selectProductsSort,
} from "modules/Shop/selectors";
import { getProducts } from "modules/Shop/service";

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

const actionGetProductsFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: GET_PRODUCTS_FAIL });
};
const actionGetProductsStart = () => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_START });
};
const actionGetProductsSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_PRODUCTS_SUCCESS });
};

export const actionGetProducts = (): any => async (dispatch, getState) => {
    dispatch(actionGetProductsStart());

    try {
        const state = getState();
        const filters = selectProductsFilters(state);
        const page = selectCurrentPage(state);
        const sort = selectProductsSort(state);

        const { data, errors } = await getProducts({
            filters,
            page,
            sort,
        });

        if (!errors) {
            if (page > 1) {
                const _data = {
                    isAdditional: true,
                    ...data,
                };
                dispatch(actionGetProductsSuccess(_data));
            } else {
                dispatch(actionGetProductsSuccess(data));
            }
        } else {
            dispatch(actionGetProductsFail(errors));
        }
    } catch (error) {
        dispatch(actionGetProductsFail([error]));
    }
};

export const actionResetPage = (): any => (dispatch) => {
    dispatch({ type: RESET_PAGE });
};

export const actionResetProductsFilters = (): any => (dispatch) => {
    dispatch({ type: RESET_PRODUCTS_FILTERS });
};

export const actionResetProductsSorts = (): any => (dispatch) => {
    dispatch({ type: RESET_PRODUCTS_SORTS });
};

export const actionSetPage = (data: number): any => (dispatch) => {
    dispatch({ data, type: SET_PAGE });
};

export const actionSetProductsFilter = (data: any): any => (dispatch) => {
    dispatch(actionResetPage());
    dispatch({ data, type: SET_PRODUCTS_FILTER });
};

export const actionSetProductsSort = (data: any): any => (dispatch) => {
    dispatch(actionResetPage());
    dispatch({ data, type: SET_PRODUCTS_SORT });
};
