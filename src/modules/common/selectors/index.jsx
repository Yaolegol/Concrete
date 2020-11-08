// @flow
import { createSelector } from 'reselect'

const getCommonState = (state) => {
    return state.common
}

export const selectMobileMenu = createSelector(
    [getCommonState],
    ({ mobileMenu }) => mobileMenu
)

export const selectMobileMenuShowStatus = createSelector(
    [selectMobileMenu],
    ({ isShow }) => isShow
)
