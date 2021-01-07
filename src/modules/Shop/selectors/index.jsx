// @flow
import { createSelector } from "reselect";

const getShopState = (state) => {
    return state.shop;
};

export const selectCurrentPage: any = createSelector(
    [getShopState],
    ({ currentPage }) => currentPage
);

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

export const selectProductsSort: any = createSelector(
    [getShopState],
    ({ sort }) => sort
);
