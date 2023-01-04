// @flow
import { GoogleMap } from "common/components/GoogleMap";
import { TabsSection } from "modules/Layout/Footer/TabsSection";
import React from "react";
import "./index.less";

export const Footer = (): React$Node => {
    return (
        <div className="footer">
            <div className="footer__map-container">
                <GoogleMap />
            </div>
            <div className="footer__content-container">
                <TabsSection />
            </div>
        </div>
    );
};
