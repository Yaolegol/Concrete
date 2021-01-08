// @flow
import { createSelector } from "reselect";

const getMobileMenuState = (state) => {
    return state.mobileMenu;
};

export const selectMobileMenuShowStatus = (createSelector(
    [getMobileMenuState],
    ({ isShow }) => isShow
): any);
