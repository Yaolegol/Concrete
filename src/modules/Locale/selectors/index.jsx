// @flow
const getLocaleState = ({ locale }) => locale;

export const selectCurrentLocale: any = (state) => {
    const locale = getLocaleState(state);

    return locale.currentLocale;
};
