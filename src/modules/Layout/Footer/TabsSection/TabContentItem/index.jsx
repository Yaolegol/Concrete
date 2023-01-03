// @flow
import cn from "classnames";
import EmailIcon from "icons/email.svg";
import MapMarkerIcon from "icons/map-marker.svg";
import PhoneIcon from "icons/phone.svg";
import React from "react";
import "./index.less";

type TProps = {
    address: React$Element<string>,
    email: React$Element<string>,
    isActive?: boolean,
    phone: React$Element<string>,
};

export const TabContentItem = ({
    address,
    email,
    isActive,
    phone,
}: TProps): React$Node => {
    return (
        <div
            className={cn(
                "modules-layout-footer-tabs-section-tab-content-item",
                isActive
                    ? "modules-layout-footer-tabs-section-tab-content-item_active"
                    : null
            )}
        >
            <div className="modules-layout-footer-tabs-section-tab-content-item__item">
                <MapMarkerIcon className="modules-layout-footer-tabs-section-tab-content-item__item-icon" />
                <p className="modules-layout-footer-tabs-section-tab-content-item__item-text">
                    {address}
                </p>
            </div>
            <a
                className="modules-layout-footer-tabs-section-tab-content-item__item"
                href={`tel:${phone.toString()}`}
            >
                <PhoneIcon className="modules-layout-footer-tabs-section-tab-content-item__item-icon" />
                <p className="modules-layout-footer-tabs-section-tab-content-item__item-text">
                    {phone}
                </p>
            </a>
            <a
                className="modules-layout-footer-tabs-section-tab-content-item__item"
                href={`mailto:${email.toString()}`}
            >
                <EmailIcon className="modules-layout-footer-tabs-section-tab-content-item__item-icon" />
                <p className="modules-layout-footer-tabs-section-tab-content-item__item-text">
                    {email}
                </p>
            </a>
        </div>
    );
};
