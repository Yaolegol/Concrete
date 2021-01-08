// @flow
import React from "react";
import "./index.less";

export const OrderHeader = (): React$Node => {
    return (
        <div className="admin-order-header">
            <div className="admin-order-header__image" />
            <p>Title</p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                Description
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                Price
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                Count
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">
                Total
            </p>
            <p className="admin-order-header__item admin-order-header__item_mobile-hidden">Email</p>
        </div>
    );
};
