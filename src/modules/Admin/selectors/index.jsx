// @flow
import { createSelector } from "reselect";

const getAdminState = (state) => {
    return state.admin;
};

export const selectOrders: any = createSelector(
    [getAdminState],
    ({ purchases }) => purchases
);
