// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

type TProps = {
    onSelect?: () => void,
};

export const AdminLinks = ({ onSelect }: TProps): React$Node => {
    return (
        <CustomNavLink
            onClick={onSelect}
            messageId="common.menu.adminDashboard"
            url="/admin"
        />
    );
};
