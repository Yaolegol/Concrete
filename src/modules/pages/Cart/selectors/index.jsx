// @flow
import { createSelector } from 'reselect'

const getCartState = (state) => {
    return state.cart
}

export const selectCartProducts = createSelector(
    [getCartState],
    ({ products }) => products
)

export const selectCartProductsItems = createSelector(
    [selectCartProducts],
    ({ items }) => items
)

export const selectCartProductsTotal = createSelector(
    [selectCartProducts],
    ({ total }) => total
)
