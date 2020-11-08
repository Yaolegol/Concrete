// @flow
import { CART_ACTION_TYPES } from 'pages/Cart/constants'

const initialState = {
    products: {
        total: 0,
        items: {}
    }
}

const { DECREMENT_PRODUCTS_COUNT, INCREMENT_PRODUCTS_COUNT } = CART_ACTION_TYPES

export const cartReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
    case DECREMENT_PRODUCTS_COUNT:
        return {
            ...state,
            products: {
                ...state.products,
                total: state.products.total - 1,
                items: {
                    ...state.products.items,
                    [data.id]: {
                        ...state.products.items[data.id],
                        count: state.products.items[data.id] && state.products.items[data.id].count ? state.products.items[data.id].count - 1 : 0
                    }
                }
            }
        }
    case INCREMENT_PRODUCTS_COUNT:
        return {
            ...state,
            products: {
                ...state.products,
                total: state.products.total + 1,
                items: {
                    ...state.products.items,
                    [data.id]: {
                        ...state.products.items[data.id],
                        count: state.products.items[data.id] && state.products.items[data.id].count ? state.products.items[data.id].count + 1 : 1
                    }
                }
            }
        }
    default:
        return state
    }
}
