// @flow
import { COMMON_ACTION_TYPES } from 'common/constants'

const { DECREMENT_CART_PRODUCTS_COUNT, INCREMENT_CART_PRODUCTS_COUNT, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES

export const actionIncCartProductsCount = () => (dispatch, getState) => {
    dispatch({ type: INCREMENT_CART_PRODUCTS_COUNT })
}

export const actionDecCartProductsCount = () => (dispatch, getState) => {
    dispatch({ type: DECREMENT_CART_PRODUCTS_COUNT })
}

export const actionShowMobileMenu = (isShow: boolean) => (dispatch, getState) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU })
}
