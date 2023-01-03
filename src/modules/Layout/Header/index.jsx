// @flow
import { Menu } from "modules/Layout/Menu";
import { SectionLeft } from "modules/Layout/Header/SectionLeft";
import { SectionRight } from "modules/Layout/Header/SectionRight";
import React from "react";
import "./index.less";

export const Header = (): React$Node => {
    return (
        <div className="header">
            <div className="header__section header__section_left">
                <SectionLeft />
            </div>
            <div className="header__section header__section_main">
                <Menu />
            </div>
            <div className="header__section header__section_right">
                <SectionRight />
            </div>
        </div>
    );
};
