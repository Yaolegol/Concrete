// @flow
import { COMMON_ACTION_TYPES } from 'common/constants'

const { DECREMENT_CART_PRODUCTS_COUNT, INCREMENT_CART_PRODUCTS_COUNT, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES

export const actionIncCartProductsCount = (id) => (dispatch, getState) => {
    dispatch({ data: { id }, type: INCREMENT_CART_PRODUCTS_COUNT })
}

export const actionDecCartProductsCount = (id) => (dispatch, getState) => {
    dispatch({ data: { id }, type: DECREMENT_CART_PRODUCTS_COUNT })
}

export const actionShowMobileMenu = (isShow: boolean) => (dispatch, getState) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU })
}
