// @flow
import { COMMON_ACTION_TYPES } from 'common/constants'

const initialState = {
    mobileMenu: {
        isShow: false
    },
    products: {
        cartProductsCount: 0
    }
}

const { DECREMENT_CART_PRODUCTS_COUNT, INCREMENT_CART_PRODUCTS_COUNT, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES

export const commonReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
    case DECREMENT_CART_PRODUCTS_COUNT:
        return {
            ...state,
            products: {
                ...state.products,
                cartProductsCount: state.products.cartProductsCount - 1
            }
        }
    case INCREMENT_CART_PRODUCTS_COUNT:
        return {
            ...state,
            products: {
                ...state.products,
                cartProductsCount: state.products.cartProductsCount + 1
            }
        }
    case SHOW_MOBILE_MENU:
        return {
            ...state,
            mobileMenu: {
                ...state.mobileMenu,
                ...data
            }
        }
    default:
        return state
    }
}
