// @flow
import { COMMON_ACTION_TYPES } from "common/constants";
const { SELECT_LANG, SHOW_MOBILE_MENU } = COMMON_ACTION_TYPES;

export const actionSelectLang = (lang: string) => (dispatch, getState) => {
    dispatch({ data: lang, type: SELECT_LANG });
};

export const actionShowMobileMenu = (isShow: boolean) => (
    dispatch,
    getState
) => {
    dispatch({ data: { isShow }, type: SHOW_MOBILE_MENU });
};
