// @flow
import { LOCALE_ACTION_TYPES } from "modules/Locale/constants";
const { SET_LOCALE } = LOCALE_ACTION_TYPES;

export const actionSetLocale = (lang: string): any => (dispatch, getState) => {
    dispatch({ data: lang, type: SET_LOCALE });
};
