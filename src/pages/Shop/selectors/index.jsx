// @flow
import { createSelector } from 'reselect'

const getShopState = (state) => {
    return state.shop
}

export const selectProducts = createSelector(
    [getShopState],
    ({ products }) => products
)

export const selectProductsList = createSelector(
    [selectProducts],
    ({ list }) => list
)
