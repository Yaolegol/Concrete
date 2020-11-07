// @flow
import { createSelector } from 'reselect'

const getShopState = (state) => {
    return state.shop
}

export const selectProductsList = createSelector(
    [getShopState],
    ({ products }) => products.list
)
