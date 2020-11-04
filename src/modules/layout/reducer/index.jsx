// @flow
import { LAYOUT_ACTION_TYPES } from 'layout/constants'

const initialState = {
    mobileMenu: {
        isShow: false
    }
}

const { SHOW_MOBILE_MENU } = LAYOUT_ACTION_TYPES

export const layoutReducer = (state = initialState, action) => {
    const { data, type } = action

    switch (type) {
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
