// @flow
import { logError } from 'common/helpers/errors'
import { SHOP_ACTION_TYPES } from 'pages/Shop/constants'
import { getProducts } from 'pages/Shop/sevice'

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

export const actionGetProducts = () => async (dispatch, getState) => {
    dispatch(actionGetProductsStart())

    try {
        const test = await getProducts()
        console.log('test')
        console.log(test)
    } catch (error) {
        dispatch(actionGetProductsFail())
        logError(error, 'actionGetProducts')
    }
}
