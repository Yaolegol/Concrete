// @flow
import { CART_ACTION_TYPES } from 'pages/Cart/constants'

const { DECREMENT_PRODUCTS_COUNT, INCREMENT_PRODUCTS_COUNT } = CART_ACTION_TYPES

export const actionIncCartProductsCount = (id) => (dispatch, getState) => {
    dispatch({ data: { id }, type: INCREMENT_PRODUCTS_COUNT })
}

export const actionDecCartProductsCount = (id) => (dispatch, getState) => {
    dispatch({ data: { id }, type: DECREMENT_PRODUCTS_COUNT })
}
