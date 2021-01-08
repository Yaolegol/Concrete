// @flow
import { MOBILE_MENU_ACTION_TYPES } from "modules/MobileMenu/constants";
const { HIDE, SHOW } = MOBILE_MENU_ACTION_TYPES;

export const actionHideMobileMenu = (): any => (dispatch, getState) => {
    dispatch({ type: HIDE });
};

export const actionShowMobileMenu = (): any => (dispatch, getState) => {
    dispatch({ type: SHOW });
};
