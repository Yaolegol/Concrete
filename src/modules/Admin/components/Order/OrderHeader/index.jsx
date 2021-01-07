// @flow
import React from "react";
import "./index.less";

export const OrderHeader = (): React$Node => {
    return (
        <div className="admin-order-header">
            <div className="admin-order-header__image" />
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Count</p>
            <p>Total</p>
            <p>Email</p>
        </div>
    );
};
