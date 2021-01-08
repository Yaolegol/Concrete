// @flow
import { MOBILE_MENU_ACTION_TYPES } from "modules/MobileMenu/constants";
const { TOGGLE } = MOBILE_MENU_ACTION_TYPES;

export const actionToggleMobileMenu = (): any => (dispatch, getState) => {
    dispatch({ type: TOGGLE });
};
