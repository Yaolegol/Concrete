// @flow
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const OrderHeader = (): React$Node => {
    return (
        <div className="admin-order-header">
            <div className="admin-order-header__image" />
            <p>
                <FormattedMessage id="common.title" />
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                <FormattedMessage id="common.description" />
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                <FormattedMessage id="common.price" />
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                <FormattedMessage id="common.count" />
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                <FormattedMessage id="common.total" />
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                <FormattedMessage id="common.email" />
            </p>
        </div>
    );
};
