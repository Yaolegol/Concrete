// @flow
const getLocaleState = (state) => {
    return state.locale;
};

export const selectCurrentLocale: any = (state) => {
    const locale = getLocaleState(state);

    return locale.currentLocale;
};
