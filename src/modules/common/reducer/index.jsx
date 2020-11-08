// @flow
import { COMMON_ACTION_TYPES } from 'common/constants'

const initialState = {
    mobileMenu: {
        isShow: false
    },
    cartProducts: {
        total: 0,
        items: {}
    }
}

const { DECREMENT_CART_PRODUCTS_COUNT, INCREMENT_CART_PRODUCTS_COUNT, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES

export const commonReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
    case DECREMENT_CART_PRODUCTS_COUNT:
        return {
            ...state,
            cartProducts: {
                ...state.cartProducts,
                total: state.cartProducts.total - 1,
                items: {
                    ...state.cartProducts.items,
                    [data.id]: {
                        ...state.cartProducts.items[data.id],
                        count: state.cartProducts.items[data.id] && state.cartProducts.items[data.id].count ? state.cartProducts.items[data.id].count - 1 : 0
                    }
                }
            }
        }
    case INCREMENT_CART_PRODUCTS_COUNT:
        return {
            ...state,
            cartProducts: {
                ...state.cartProducts,
                total: state.cartProducts.total + 1,
                items: {
                    ...state.cartProducts.items,
                    [data.id]: {
                        ...state.cartProducts.items[data.id],
                        count: state.cartProducts.items[data.id] && state.cartProducts.items[data.id].count ? state.cartProducts.items[data.id].count + 1 : 1
                    }
                }
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
