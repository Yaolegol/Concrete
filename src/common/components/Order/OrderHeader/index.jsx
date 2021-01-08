// @flow
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const OrderHeader = (): React$Node => {
    return (
        <div className="order-header">
            <div className="order-header__image" />
            <p>
                <FormattedMessage id="order.title" />
            </p>
            <p className="order-header__item order-header__item_mobile-hidden">
                <FormattedMessage id="order.description" />
            </p>
            <p className="order-header__item order-header__item_mobile-hidden">
                <FormattedMessage id="order.price" />
            </p>
            <p className="order-header__item order-header__item_mobile-hidden">
                <FormattedMessage id="order.count" />
            </p>
            <p>
                <FormattedMessage id="order.total" />
            </p>
        </div>
    );
};
