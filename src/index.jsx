// @flow
import React from "react";
import { IntlProvider } from "react-intl";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "app/index.jsx";
import { store } from "app/store";
import "styles/index.less";

const appTextData = {
    en: {
        test: "test en",
    },
    ru: {
        test: "test ru",
    },
};

render(
    <Provider store={store}>
        <IntlProvider locale="en" messages={appTextData.en}>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById("root")
);
