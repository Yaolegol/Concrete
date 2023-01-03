// @flow
import cn from "classnames";
import { Logo } from "common/components/Logo";
import { Menu } from "common/components/Menu";
import { LangSelect } from "modules/Locale/components/LangSelect";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import { selectMobileMenuShowStatus } from "modules/MobileMenu/selectors";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    dispatch: any,
    isShow: boolean,
};

const MobileMenu = ({ dispatch, isShow }: TProps): React$Node => {
    const toggleMobileMenu = useCallback(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <div
            className={cn("mobile-menu", isShow ? "active" : "")}
            onClick={toggleMobileMenu}
        >
            <div className="mobile-menu__content-container">
                <div className="mobile-menu__logo-container">
                    <Logo />
                </div>
                <div className="mobile-menu__menu">
                    <Menu column={true} />
                </div>
                <div className="mobile-menu__lang-select">
                    <LangSelect />
                </div>
            </div>
        </div>
    );
};

export default (connect((state) => ({
    isShow: selectMobileMenuShowStatus(state),
}))(MobileMenu): any);
