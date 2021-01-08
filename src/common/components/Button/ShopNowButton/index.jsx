// @flow
import { Button } from "common/components/Button";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const ShopNowButton = (props: any): React$Node => {
    return (
        <Link to="/shop">
            <Button {...props}>
                <FormattedMessage id="common.buttons.shopNow.title" />
            </Button>
        </Link>
    );
};
