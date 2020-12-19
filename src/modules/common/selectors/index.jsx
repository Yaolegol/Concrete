// @flow
import { createSelector } from "reselect";

const getCommonState = (state) => {
    return state.common;
};

const getUserState = (state) => {
    return state.user;
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

export const selectUser = createSelector([getUserState], (user) => user);
