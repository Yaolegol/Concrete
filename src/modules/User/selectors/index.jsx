// @flow
import { isObjectEmpty } from "common/helpers/object";
import { createSelector } from "reselect";

const getUserState = (state) => {
    return state.user;
};

export const selectUser = (createSelector([getUserState], ({ user }) => {
    if (!isObjectEmpty(user)) {
        return { ...user };
    }
    return null;
}): any);

export const selectUserPurchases = (createSelector([selectUser], (user) => {
    if (user) {
        const { purchases } = user;
        if (!purchases) {
            return [];
        }
        return purchases.map(({ purchaseID }) => purchaseID.purchase);
    }
    return [];
}): any);
