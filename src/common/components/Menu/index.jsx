// @flow
import cn from "classnames";
import { MenuItem } from "common/components/Menu/MenuItem";
import { actionLogout } from "modules/Auth/actions";
import { selectUser } from "modules/User/selectors";
import React, { useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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

    const adminLinks = useMemo(() => {
        return (
            <>
                <NavLink
                    activeClassName="menu__link_active"
                    className="menu__link"
                    to="/admin"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.adminDashboard" />
                    </MenuItem>
                </NavLink>
            </>
        );
    }, []);

    const registeredLinks = useMemo(() => {
        return (
            <>
                <NavLink
                    activeClassName="menu__link_active"
                    className="menu__link"
                    to="/profile"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.profile" />
                    </MenuItem>
                </NavLink>
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
                <NavLink
                    activeClassName="menu__link_active"
                    className="menu__link"
                    to="/signup"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.signUp" />
                    </MenuItem>
                </NavLink>
                <NavLink
                    activeClassName="menu__link_active"
                    className="menu__link"
                    to="/login"
                >
                    <MenuItem>
                        <FormattedMessage id="common.menu.logIn" />
                    </MenuItem>
                </NavLink>
            </>
        );
    }, []);

    return (
        <div className={cn("menu", className)}>
            <NavLink
                activeClassName="menu__link_active"
                exact={true}
                className="menu__link"
                to="/"
            >
                <MenuItem>
                    <FormattedMessage id="common.menu.mainPage" />
                </MenuItem>
            </NavLink>
            <NavLink
                activeClassName="menu__link_active"
                className="menu__link"
                to="/shop"
            >
                <MenuItem>
                    <FormattedMessage id="common.menu.shopPage" />
                </MenuItem>
            </NavLink>
            {user && user.admin ? adminLinks : null}
            {user ? registeredLinks : unregisteredLinks}
        </div>
    );
};
