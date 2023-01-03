// @flow
import { HomeHero } from "main/Home/Hero";
import { Footer } from "modules/Layout/Footer";
import { Header } from "modules/Layout/Header";
import MobileMenu from "modules/MobileMenu/components/MobileMenu";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Layout = ({ children }: TProps): React$Node => {
    const location = useLocation();

    const hero = useMemo(() => {
        switch (location.pathname) {
            case "/":
                return <HomeHero />;
            default:
                return null;
        }
    }, [location]);

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
