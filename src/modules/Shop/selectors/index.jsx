// @flow
import { createSelector } from "reselect";

const getShopState = (state) => {
    return state.shop;
};

export const selectProducts: any = createSelector(
    [getShopState],
    ({ products }) => products
);

export const selectProductsFilters: any = createSelector(
    [getShopState],
    ({ filters }) => filters
);

export const selectProductsList: any = createSelector(
    [selectProducts],
    ({ list }) => list
);
