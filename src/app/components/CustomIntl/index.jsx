// @flow
import text from "config/text.json";
import { selectCurrentLocale } from "modules/Locale/selectors";
import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

type TProps = {
    children: React$Node,
};

export const CustomIntl = ({ children }: TProps): React$Node => {
    const currentLocale = useSelector(selectCurrentLocale);

    return (
        <IntlProvider locale={currentLocale} messages={text[currentLocale]}>
            {children}
        </IntlProvider>
    );
};
