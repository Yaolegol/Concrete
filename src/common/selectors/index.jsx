// @flow
import { isObjectEmpty } from "common/helpers/object";
import { createSelector } from "reselect";

const getCommonState = (state) => {
    return state.common;
};

export const selectLocale = (createSelector(
    [getCommonState],
    ({ locale }) => locale
): any);

export const selectCurrentLocale = (createSelector(
    [selectLocale],
    ({ current }) => current
): any);

export const selectMobileMenu = (createSelector(
    [getCommonState],
    ({ mobileMenu }) => mobileMenu
): any);

export const selectMobileMenuShowStatus = (createSelector(
    [selectMobileMenu],
    ({ isShow }) => isShow
): any);

export const selectUser = (createSelector([getCommonState], ({ user }) => {
    if (!isObjectEmpty(user)) {
        return { ...user };
    }
    return null;
}): any);

export const selectUserPurchases = (createSelector(
    [selectUser],
    ({ purchases }) => {
        if (!purchases) {
            return [];
        }
        return purchases.map(({ purchaseID }) => purchaseID.purchase);
    }
): any);
