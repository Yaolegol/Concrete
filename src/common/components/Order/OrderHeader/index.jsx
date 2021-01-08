// @flow
import React from "react";
import "./index.less";

export const OrderHeader = (): React$Node => {
    return (
        <div className="order-header">
            <div className="order-header__image" />
            <p>Title</p>
            <p className="order-header__item order-header__item_mobile-hidden">
                Description
            </p>
            <p className="order-header__item order-header__item_mobile-hidden">
                Price
            </p>
            <p className="order-header__item order-header__item_mobile-hidden">
                Count
            </p>
            <p>Total</p>
        </div>
    );
};
