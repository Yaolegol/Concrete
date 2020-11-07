// @flow
import { SHOP_ACTION_TYPES } from 'pages/Shop/constants'

const { GET_PRODUCTS_FAIL, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } = SHOP_ACTION_TYPES

const actionGetProductsFail = () => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_FAIL })
}
const actionGetProductsStart = () => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_START })
}
const actionGetProductsSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_PRODUCTS_SUCCESS })
}

export const actionGetProducts = () => (dispatch, getState) => {
    dispatch(actionGetProductsStart())
}
