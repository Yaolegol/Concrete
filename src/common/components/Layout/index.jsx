// @flow
import { Footer } from "common/components/Layout/Footer";
import { Header } from "common/components/Layout/Header";
import MobileMenu from "modules/MobileMenu/components/MobileMenu";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
    hero?: React$Node,
};

export const Layout = ({ children, hero }: TProps): React$Node => {
    return (
        <div className="layout">
            <MobileMenu />
            <Header />
            {hero ? <div className="layout__hero">{hero}</div> : null}
            <div className="layout__content">{children}</div>
            <div className="layout__footer">
                <Footer />
            </div>
        </div>
    );
};
