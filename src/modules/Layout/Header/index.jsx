// @flow
import { BurgerButton } from "common/components/Button/BurgerButton";
import { Logo } from "common/components/Logo";
import { Menu } from "modules/Layout/Menu";
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
            <div className="header__item header__item_mobile">
                <BurgerButton onClick={toggleMobileMenu} />
            </div>
            <div className="header__item header__item_desktop">
                <Logo />
            </div>
            <div className="header__item header__item_desktop">
                <Socials />
            </div>
            <div className="header__item header__item_desktop">
                <Menu />
            </div>
            <div className="header__lang-select header__item header__item_desktop">
                <LangSelect />
            </div>
            <CartLink />
        </div>
    );
};
