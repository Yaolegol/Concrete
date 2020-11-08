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
    ({ products }) => products
)

export const selectCartProducts = createSelector(
    [selectProducts],
    ({ productsItems }) => productsItems
)

export const selectCartProductsCount = createSelector(
    [selectProducts],
    ({ cartProductsCount }) => cartProductsCount
)

export const selectMobileMenuShowStatus = createSelector(
    [selectMobileMenu],
    ({ isShow }) => isShow
)
