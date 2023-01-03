// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

export const AdminLinks = (): React$Node => {
    return (
        <CustomNavLink messageId="common.menu.adminDashboard" url="/admin" />
    );
};
