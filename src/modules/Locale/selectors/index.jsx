// @flow
import { createSelector } from "reselect";

const getLocaleState = (state) => {
    return state.locale;
};

export const selectCurrentLocale = (createSelector(
    [getLocaleState],
    ({ currentLocale }) => currentLocale
): any);
