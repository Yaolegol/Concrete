// @flow
import cn from "classnames";
import { Footer } from "common/components/Layout/Footer";
import { Header } from "common/components/Layout/Header";
import MobileMenu from "modules/MobileMenu/components/MobileMenu";
import React, { useMemo } from "react";
import "./index.less";

type TProps = {
    children: React$Node,
    hero?: React$Node,
    withFooter?: boolean,
};

export const Layout = ({
    children,
    hero,
    withFooter = true,
}: TProps): React$Node => {
    const heroSection = useMemo(() => {
        return hero ? <div className="layout__hero">{hero}</div> : null;
    }, [hero]);

    return (
        <div className="layout">
            <MobileMenu />
            <Header />
            <div
                className={cn(
                    "layout__content",
                    heroSection ? null : "layout__content_flex"
                )}
            >
                {heroSection}
                <div
                    className={cn(
                        "layout__children-container",
                        heroSection ? null : "layout__children-container_flex"
                    )}
                >
                    {children}
                </div>
                {withFooter ? <Footer /> : null}
            </div>
        </div>
    );
};
