// @flow
import cn from "classnames";
import EmailIcon from "images/email.svg";
import MapMarkerIcon from "images/map-marker.svg";
import PhoneIcon from "images/phone.svg";
import React from "react";
import "./index.less";

type TProps = {
    address: string,
    className?: string,
    email: string,
    isActive?: boolean,
    phone: string,
};

export const AddressContent = ({
    address,
    className,
    email,
    isActive,
    phone,
}: TProps): React$Node => {
    return (
        <div
            className={cn(
                "tabs-content",
                isActive ? "tabs-content_active" : null,
                className
            )}
        >
            <div className="tabs-content__item">
                <MapMarkerIcon className="tabs-content__item-icon" />
                <p className="tabs-content__item-text">{address}</p>
            </div>
            <a href={`tel:${phone}`} className="tabs-content__item">
                <PhoneIcon className="tabs-content__item-icon" />
                <p className="tabs-content__item-text">{phone}</p>
            </a>
            <a href={`mailto:${email}`} className="tabs-content__item">
                <EmailIcon className="tabs-content__item-icon" />
                <p className="tabs-content__item-text">{email}</p>
            </a>
        </div>
    );
};
