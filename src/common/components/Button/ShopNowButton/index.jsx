// @flow
import { Button } from "common/components/Button";
import React from "react";
import { Link } from "react-router-dom";

export const ShopNowButton = (props: any): React$Node => {
    return (
        <Link to="/shop">
            <Button {...props}>Shop now</Button>
        </Link>
    );
};
