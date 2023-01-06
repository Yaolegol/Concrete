// @flow
import { ShopNowButton } from "common/components/Button/ShopNowButton";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const CartEmpty = (): React$Node => {
    return (
        <div className="cart-empty">
            <FormattedMessage id="cart.empty.description" />
            <div className="cart-empty__button-shop">
                <ShopNowButton />
            </div>
        </div>
    );
};
