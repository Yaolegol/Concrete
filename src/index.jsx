// @flow
import App from "app";
import { store } from "app/store";
import textConfig from "config/text.json";
import { logError } from "common/helpers/errors";
import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import "styles/index.less";

const rootElement = document.getElementById("root");

if (rootElement) {
    render(
        <Provider store={store}>
            <IntlProvider locale="en" messages={textConfig.en}>
                <App />
            </IntlProvider>
        </Provider>,
        rootElement
    );
} else {
    logError("No root element is found", "index.jsx");
}
