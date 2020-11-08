// @flow
import { COMMON_ACTION_TYPES } from 'common/constants'

const { SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES

export const actionShowMobileMenu = (isShow: boolean) => (dispatch, getState) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU })
}
