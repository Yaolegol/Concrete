// @flow
import { CustomNavLink } from "common/components/Link/Nav";
import { actionLogout } from "modules/Auth/actions";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

export const RegisterLinks = (): React$Node => {
    const dispatch = useDispatch();

    const logout = useCallback(() => {
        dispatch(actionLogout());
    }, [dispatch]);

    return (
        <>
            <CustomNavLink messageId="common.menu.profile" url="/profile" />
            <CustomNavLink
                messageId="common.menu.logOut"
                onClick={logout}
                url="/"
            />
        </>
    );
};
