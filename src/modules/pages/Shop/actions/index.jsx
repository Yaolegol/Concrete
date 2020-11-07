// @flow
import { SHOP_ACTION_TYPES } from 'pages/Shop/constants'
import { getProducts } from 'pages/Shop/sevice'

const { GET_PRODUCTS_FAIL, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } = SHOP_ACTION_TYPES

const actionGetProductsFail = (errors) => (dispatch) => {
    dispatch({ data: errors, type: GET_PRODUCTS_FAIL })
}
const actionGetProductsStart = () => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_START })
}
const actionGetProductsSuccess = (data) => (dispatch) => {
    dispatch({ data, type: GET_PRODUCTS_SUCCESS })
}

export const actionGetProducts = () => async (dispatch, getState) => {
    dispatch(actionGetProductsStart())

    try {
        const { data, errors } = await getProducts()

        if (!errors) {
            dispatch(actionGetProductsSuccess(data))
        } else {
            dispatch(actionGetProductsFail(errors))
        }
    } catch (error) {
        dispatch(actionGetProductsFail([error]))
    }
}
