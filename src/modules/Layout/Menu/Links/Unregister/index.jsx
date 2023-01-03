// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

type TProps = {
    onSelect?: () => void,
};

export const UnregisterLinks = ({ onSelect }: TProps): React$Node => {
    return (
        <>
            <CustomNavLink
                onClick={onSelect}
                messageId="common.menu.signUp"
                url="/signup"
            />
            <CustomNavLink
                onClick={onSelect}
                messageId="common.menu.logIn"
                url="/login"
            />
        </>
    );
};
