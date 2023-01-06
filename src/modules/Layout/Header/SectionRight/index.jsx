// @flow
import { CartLink } from "modules/Layout/Header/CartLink";
import { LangSelect } from "modules/Locale/components/LangSelect";
import React from "react";
import "./index.less";

export const SectionRight = (): React$Node => {
    return (
        <div className="modules-layout-header-section-right">
            <div className="modules-layout-header-section-right__lang-select">
                <LangSelect />
            </div>
            <CartLink />
        </div>
    );
};
