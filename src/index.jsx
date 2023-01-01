// @flow
import App from "app";
import { CustomIntl } from "app/components/CustomIntl";
import { ProviderStore } from "app/components/ProviderStore";
import React from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
    render(
        <ProviderStore>
            <CustomIntl>
                <App />
            </CustomIntl>
        </ProviderStore>,
        rootElement
    );
} else {
    console.error("No root element");
}
