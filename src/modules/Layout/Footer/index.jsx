// @flow
import { GoogleMap } from "common/components/GoogleMap";
import { TabsSection } from "modules/Layout/Footer/TabsSection";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Footer = (): React$Node => {
    return (
        <div className="footer">
            <h3 className="footer__title">
                <FormattedMessage id="common.contacts.title" />
            </h3>
            <div className="footer__content-section">
                <div className="footer__map-container">
                    <GoogleMap />
                </div>
                <div className="footer__content-container">
                    <TabsSection />
                </div>
            </div>
        </div>
    );
};
