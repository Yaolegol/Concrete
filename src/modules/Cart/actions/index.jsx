// @flow
import { CART_ACTION_TYPES } from "modules/Cart/constants";
import { buyProducts } from "modules/Cart/service";

const {
    BUY_PRODUCTS_FAIL,
    BUY_PRODUCTS_START,
    BUY_PRODUCTS_SUCCESS,
    DECREMENT_PRODUCTS_COUNT,
    INCREMENT_PRODUCTS_COUNT,
    RESET_CART,
} = CART_ACTION_TYPES;

const actionBuyProductsFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: BUY_PRODUCTS_FAIL });
};
const actionBuyProductsStart = () => (dispatch) => {
    dispatch({ type: BUY_PRODUCTS_START });
};
const actionBuyProductsSuccess = (data) => (dispatch) => {
    dispatch({ data, type: BUY_PRODUCTS_SUCCESS });
};

export const actionBuyProducts = (products: any): any => async (
    dispatch,
    getState
) => {
    dispatch(actionBuyProductsStart());

    try {
        const { data, errors } = await buyProducts(products);

        if (!errors) {
            dispatch(actionBuyProductsSuccess(data));
        } else {
            dispatch(actionBuyProductsFail(errors));
        }

        return { data, errors };
    } catch (error) {
        dispatch(actionBuyProductsFail([error]));

        return { errors: error };
    }
};

export const actionDecCartProductsCount = (id: any): any => (
    dispatch,
    getState
) => {
    dispatch({ data: { id }, type: DECREMENT_PRODUCTS_COUNT });
};

export const actionIncCartProductsCount = (id: any): any => (
    dispatch,
    getState
) => {
    dispatch({ data: { id }, type: INCREMENT_PRODUCTS_COUNT });
};

export const actionResetCart = (): any => (dispatch, getState) => {
    dispatch({ type: RESET_CART });
};
