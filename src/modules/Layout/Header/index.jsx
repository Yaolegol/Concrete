// @flow
import { BurgerButton } from "common/components/Button/BurgerButton";
import { Logo } from "common/components/Logo";
import { Menu } from "common/components/Menu";
import { Socials } from "common/components/Socials";
import CartLink from "modules/Layout/Header/CartLink";
import { LangSelect } from "modules/Locale/components/LangSelect";
import { actionShowMobileMenu } from "modules/MobileMenu/actions";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const Header = (): React$Node => {
    const dispatch = useDispatch();

    const toggleMobileMenu = useCallback(() => {
        dispatch(actionShowMobileMenu());
    }, [dispatch]);

    return (
        <div className="header">
            <BurgerButton
                className="header__burger-button"
                onClick={toggleMobileMenu}
            />
            <Logo className="header__item_laptop-hidden" />
            <Socials className="header__item_laptop-hidden" />
            <div className="header__item_laptop-hidden">
                <Menu />
            </div>
            <div className="header__lang-select header__item_laptop-hidden">
                <LangSelect />
            </div>
            <CartLink />
        </div>
    );
};
