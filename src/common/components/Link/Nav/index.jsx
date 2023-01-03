// @flow
import React from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import "./index.less";

type TProp = {
    messageId: string,
    onClick?: () => void,
    url: string,
};

export const CustomNavLink = ({
    messageId,
    onClick,
    url,
}: TProp): React$Node => {
    return (
        <NavLink
            className="common-components-nav-link"
            exact={true}
            onClick={onClick}
            to={url}
        >
            <FormattedMessage id={messageId} />
        </NavLink>
    );
};
