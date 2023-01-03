// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import React from "react";

type TProps = {
    onSelect?: () => void,
};

export const PagesLinks = ({ onSelect }: TProps): React$Node => {
    return (
        <>
            <CustomNavLink
                onClick={onSelect}
                messageId="common.menu.homePage"
                url="/"
            />
            <CustomNavLink
                onClick={onSelect}
                messageId="common.menu.shopPage"
                url="/shop"
            />
        </>
    );
};
