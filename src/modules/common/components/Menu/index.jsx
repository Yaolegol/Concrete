// @flow
import cn from "classnames";
import { MenuItem } from "common/components/Menu/MenuItem";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./index.less";

type TProps = {
    className?: string,
};

export const Menu = ({ className }: TProps): React$Node => {
    return (
        <div className={cn("menu", className)}>
            <Link to="/">
                <MenuItem>
                    <FormattedMessage id="common.menu.mainPage" />
                </MenuItem>
            </Link>
            <Link to="/shop">
                <MenuItem>
                    <FormattedMessage id="common.menu.shopPage" />
                </MenuItem>
            </Link>
            <Link to="/signup">
                <MenuItem>
                    <FormattedMessage id="common.menu.signUp" />
                </MenuItem>
            </Link>
            <Link to="/login">
                <MenuItem>
                    <FormattedMessage id="common.menu.logIn" />
                </MenuItem>
            </Link>
        </div>
    );
};
