// @flow
import App from "app";
import { CustomIntl } from "app/components/CustomIntl";
import { CustomProvider } from "app/components/CustomProvider";
import { logError } from "common/helpers/errors";
import React from "react";
import { render } from "react-dom";
import "styles/index.less";

const rootElement = document.getElementById("root");

if (rootElement) {
    render(
        <CustomProvider>
            <CustomIntl>
                <App />
            </CustomIntl>
        </CustomProvider>,
        rootElement
    );
} else {
    logError("No root element is found", "index.jsx");
}
