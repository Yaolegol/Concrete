// @flow
import { BurgerButton } from "common/components/Button/BurgerButton";
import { Logo } from "common/components/Logo";
import { actionShowMobileMenu } from "modules/MobileMenu/actions";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const SectionLeft = (): React$Node => {
    const dispatch = useDispatch();

    const toggleMobileMenu = useCallback(() => {
        dispatch(actionShowMobileMenu());
    }, [dispatch]);

    return (
        <div className="modules-layout-header-section-left">
            <div className="modules-layout-header-section-left__burger">
                <BurgerButton onClick={toggleMobileMenu} />
            </div>
            <div className="modules-layout-header-section-left__logo">
                <Logo />
            </div>
        </div>
    );
};
