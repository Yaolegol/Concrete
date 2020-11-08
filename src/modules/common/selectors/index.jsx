// @flow
import { createSelector } from 'reselect'

const getCommonState = (state) => {
    return state.common
}

export const selectMobileMenu = createSelector(
    [getCommonState],
    ({ mobileMenu }) => mobileMenu
)

export const selectProducts = createSelector(
    [getCommonState],
    ({ cartProducts }) => cartProducts
)

export const selectCartProducts = createSelector(
    [selectProducts],
    ({ items }) => items
)

export const selectCartProductsTotal = createSelector(
    [selectProducts],
    ({ total }) => total
)

export const selectMobileMenuShowStatus = createSelector(
    [selectMobileMenu],
    ({ isShow }) => isShow
)
