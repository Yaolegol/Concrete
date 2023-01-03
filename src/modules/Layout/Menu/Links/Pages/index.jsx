// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

export const PagesLinks = (): React$Node => {
    return (
        <>
            <CustomNavLink messageId="common.menu.homePage" url="/" />
            <CustomNavLink messageId="common.menu.shopPage" url="/shop" />
        </>
    );
};
