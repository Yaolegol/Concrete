// @flow
import { isObjectEmpty } from "common/helpers/object";
import { createSelector } from "reselect";

const getUserState = (state) => {
    return state.user;
};

export const selectUser: any = createSelector([getUserState], ({ user }) => {
    if (!isObjectEmpty(user)) {
        return { ...user };
    }
    return null;
});

export const selectUserPurchases: any = createSelector([selectUser], (user) => {
    if (user) {
        const { purchases } = user;
        if (!purchases) {
            return [];
        }
        return purchases.map(({ purchaseID }) => purchaseID.purchase);
    }
    return [];
});
