// @flow
import textConfig from "config/text.json";
import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

type TProps = {
    children: React$Node,
};

export const CustomIntl = ({ children }: TProps): React$Node => {
    return (
        <IntlProvider locale="en" messages={textConfig.en}>
            {children}
        </IntlProvider>
    );
};
