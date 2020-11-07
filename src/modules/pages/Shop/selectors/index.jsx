// @flow
import { createSelector } from 'reselect'

const getLayoutState = (state) => {
    return state.layout
}

export const selectMobileMenu = createSelector(
    [getLayoutState],
    ({ mobileMenu }) => mobileMenu
)

export const selectMobileMenuShowStatus = createSelector(
    [selectMobileMenu],
    ({ isShow }) => isShow
)
