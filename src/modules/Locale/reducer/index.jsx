// @flow
import { LOCALE_ACTION_TYPES } from "modules/Locale/constants";

const { SET_LOCALE } = LOCALE_ACTION_TYPES;

const initialState = {
    currentLocale: "en",
};

export const localeReducer = (state: any = initialState, action: any): any => {
    const { data, type } = action;

    switch (type) {
        case SET_LOCALE:
            return {
                ...state,
                currentLocale: data,
            };
        default:
            return state;
    }
};
