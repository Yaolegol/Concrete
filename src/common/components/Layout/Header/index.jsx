// @flow
import { LangSelect } from "modules/Locale/components/LangSelect";
import { actionToggleMobileMenu } from "modules/MobileMenu/actions";
import { BurgerButton } from "common/components/Button/BurgerButton";
import CartLink from "common/components/Layout/Header/CartLink";
import { Logo } from "common/components/Logo";
import { Menu } from "common/components/Menu";
import { Socials } from "common/components/Socials";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const Header = (): React$Node => {
    const dispatch = useDispatch();

    const toggleMobileMenu = useCallback(() => {
        dispatch(actionToggleMobileMenu());
    }, [dispatch]);

    return (
        <div className="header">
            <BurgerButton
                className="header__burger-button"
                onClick={toggleMobileMenu}
            />
            <Logo className="header__item_tablet-hidden" />
            <Socials className="header__item_tablet-hidden" />
            <Menu className="header__item_tablet-hidden" />
            <div className="header__lang-select">
                <LangSelect />
            </div>
            <CartLink />
        </div>
    );
};
