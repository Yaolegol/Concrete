// @flow
import { SHOP_ACTION_TYPES } from "modules/Shop/constants";
import { getProducts } from "modules/Shop/service";

const {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
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

export const actionGetProducts = ({ filters, sort }: any = {}): any => async (
    dispatch,
    getState
) => {
    dispatch(actionGetProductsStart());

    try {
        const { data, errors } = await getProducts({ filters, sort });

        if (!errors) {
            dispatch(actionGetProductsSuccess(data));
        } else {
            dispatch(actionGetProductsFail(errors));
        }
    } catch (error) {
        dispatch(actionGetProductsFail([error]));
    }
};
