// @flow
import { SHOP_ACTION_TYPES } from 'pages/Shop/constants'

const initialState = {
    loading: false
}

const { GET_PRODUCTS_FAIL, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } = SHOP_ACTION_TYPES

export const shopReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
    case GET_PRODUCTS_FAIL:
        return {
            ...state,
            loading: false
        }
    case GET_PRODUCTS_START:
        return {
            ...state,
            loading: true
        }
    case GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            loading: false
        }
    default:
        return state
    }
}
