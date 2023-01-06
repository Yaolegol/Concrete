// @flow
import { isObjectEmpty } from "helpers/object";

export const selectUserState: any = ({ user }) => user;

export const selectUser: any = (state) => {
    const { user } = selectUserState(state);

    if (isObjectEmpty(user)) {
        return null;
    }

    return { ...user };
};

export const selectUserPurchases: any = (user) => {
    if (isObjectEmpty(user)) {
        return [];
    }

    const { purchases } = user;

    if (!purchases) {
        return [];
    }

    return purchases.map(({ purchaseID }) => purchaseID.purchase);
};
