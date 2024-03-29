// @flow
import cn from "classnames";
import { Logo } from "common/components/Logo";
import { Menu } from "modules/Layout/Menu";
import { LangSelect } from "modules/Locale/components/LangSelect";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { selectMobileMenuShowStatus } from "modules/MobileMenu/selectors";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

export const MobileMenu = (): React$Node => {
    const dispatch = useDispatch();
    const isShow = useSelector(selectMobileMenuShowStatus);

    const toggleMobileMenu = useCallback(
        (e) => {
            dispatch(actionHideMobileMenu());
        },
        [dispatch]
    );

    const handleBackdropClick = useCallback(
        (e) => {
            if (!e.target.classList.contains("mobile-menu")) {
                return;
            }

            toggleMobileMenu();
        },
        [toggleMobileMenu]
    );

    return (
        <div
            className={cn("mobile-menu", isShow ? "active" : "")}
            onClick={handleBackdropClick}
        >
            <div className="mobile-menu__content-container">
                <div className="mobile-menu__logo-container">
                    <Logo />
                </div>
                <div className="mobile-menu__menu">
                    <Menu column={true} onSelect={toggleMobileMenu} />
                </div>
                <div className="mobile-menu__lang-select">
                    <LangSelect />
                </div>
            </div>
        </div>
    );
};
