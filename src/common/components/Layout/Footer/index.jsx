// @flow
import { GoogleMap } from "common/components/GoogleMap";
import { AddressContent } from "common/components/Layout/Footer/AddressContent";
import { Tabs } from "common/components/Tabs";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const _tabs = [
    {
        id: 1,
        name: <FormattedMessage id="footer.tabs.tab1.title" />,
    },
    {
        id: 2,
        name: <FormattedMessage id="footer.tabs.tab2.title" />,
    },
    {
        id: 3,
        name: <FormattedMessage id="footer.tabs.tab3.title" />,
    },
];

const tabsContent = [
    {
        id: 1,
        data: {
            address: <FormattedMessage id="common.address.address1" />,
            email: <FormattedMessage id="common.email.email1" />,
            phone: <FormattedMessage id="common.phone.phone1" />,
        },
    },
    {
        id: 2,
        data: {
            address: <FormattedMessage id="common.address.address2" />,
            email: <FormattedMessage id="common.email.email2" />,
            phone: <FormattedMessage id="common.phone.phone2" />,
        },
    },
    {
        id: 3,
        data: {
            address: <FormattedMessage id="common.address.address3" />,
            email: <FormattedMessage id="common.email.email3" />,
            phone: <FormattedMessage id="common.phone.phone3" />,
        },
    },
];

export const Footer = (): React$Node => {
    return (
        <div className="footer">
            <h3>
                <FormattedMessage id="common.contacts.title" />
            </h3>
            <div className="footer__content-section">
                <div className="footer__map-container">
                    <GoogleMap />
                </div>
                <div className="footer__content-container">
                    <Tabs
                        activeTabId={1}
                        content={tabsContent}
                        contentComponent={AddressContent}
                        tabs={_tabs}
                    />
                </div>
            </div>
        </div>
    );
};
