// @flow
import cn from "classnames";
import { actionToggleMobileMenu } from "modules/MobileMenu/actions";
import { selectMobileMenuShowStatus } from "modules/MobileMenu/selectors";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    children: React$Node,
    dispatch: any,
    isShow: boolean,
};

const MobileMenu = ({ children, dispatch, isShow }: TProps): React$Node => {
    const toggleMobileMenu = useCallback(() => {
        dispatch(actionToggleMobileMenu());
    }, [dispatch]);

    return (
        <div
            className={cn("mobile-menu", isShow ? "mobile-menu_show" : null)}
            onClick={toggleMobileMenu}
        >
            <div className="mobile-menu__body">{children}</div>
        </div>
    );
};

export default (connect((state) => ({
    isShow: selectMobileMenuShowStatus(state),
}))(MobileMenu): any);
