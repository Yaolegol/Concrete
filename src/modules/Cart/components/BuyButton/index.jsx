// @flow
import { Button } from "common/components/Button";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    onClick: () => void,
};

export const BuyButton = ({ onClick }: TProps): React$Node => {
    return (
        <div className="cart-page__buy-section">
            <Button onClick={onClick}>
                <FormattedMessage id="common.buy" />
            </Button>
        </div>
    );
};
