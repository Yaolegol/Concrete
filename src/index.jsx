// @flow
import React from "react";
import { IntlProvider } from "react-intl";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "app/index.jsx";
import { store } from "app/store.jsx";
import "styles/index.less";

render(
    <Provider store={store}>
        <IntlProvider
            locale={usersLocale}
            messages={translationsForUsersLocale}
        >
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById("root")
);
