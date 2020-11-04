// @flow
import { LAYOUT_ACTION_TYPES } from 'layout/constants'

const { SHOW_MOBILE_MENU } = LAYOUT_ACTION_TYPES

export const actionShowMobileMenu = (isShow: boolean) => (dispatch, getState) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU })
}
