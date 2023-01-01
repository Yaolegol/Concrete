// @flow
import { Footer } from "common/components/Layout/Footer";
import { Header } from "common/components/Layout/Header";
import MobileMenu from "modules/MobileMenu/components/MobileMenu";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className="layout">
            <MobileMenu />
            <Header />
            <div
                className="layout__hero"
                id="id-layout-hero-section"
            ></div>
            <div className="layout__content">{children}</div>
            <Footer />
        </div>
    );
};
