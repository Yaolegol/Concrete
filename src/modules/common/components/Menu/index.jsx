// @flow
import cn from "classnames";
import { actionLogout } from "common/actions";
import { MenuItem } from "common/components/Menu/MenuItem";
import { selectUser } from "common/selectors";
import React, { useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

type TProps = {
    className?: string,
};

export const Menu = ({ className }: TProps): React$Node => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logout = useCallback(() => {
        dispatch(actionLogout());
    }, [dispatch]);

    const registeredLinks = useMemo(() => {
        return (
            <>
                <Link to="/profile">
                    <MenuItem>
                        <FormattedMessage id="common.menu.profile" />
                    </MenuItem>
                </Link>
                <button className="menu__button" onClick={logout}>
                    <MenuItem>
                        <FormattedMessage id="common.menu.logOut" />
                    </MenuItem>
                </button>
            </>
        );
    }, [logout]);

    const unregisteredLinks = useMemo(() => {
        return (
            <>
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
            </>
        );
    }, []);

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
            {user ? registeredLinks : unregisteredLinks}
        </div>
    );
};
