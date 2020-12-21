// @flow
import React from "react";
import "./index.less";

export const OrderHeader = () => {
    return (
        <div className="order-header">
            <div className="order-header__image" />
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Count</p>
            <p>Total</p>
        </div>
    );
};
