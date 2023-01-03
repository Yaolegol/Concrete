// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

export const UnregisterLinks = (): React$Node => {
    return (
        <>
            <CustomNavLink messageId="common.menu.signUp" url="/signup" />
            <CustomNavLink messageId="common.menu.logIn" url="/login" />
        </>
    );
};
