// @flow
import cn from "classnames";
import { actionShowMobileMenu } from "common/actions";
import { selectMobileMenuShowStatus } from "common/selectors";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./index.less";

type TProps = {
    children: React$Node,
    dispatch: any,
    isShow: boolean,
};

const MobileMenu = ({ children, dispatch, isShow }: TProps): React$Node => {
    const showMobileMenu = useCallback(() => {
        dispatch(actionShowMobileMenu(false));
    }, [dispatch]);

    return (
        <div
            className={cn("mobile-menu", isShow ? "mobile-menu_show" : null)}
            onClick={showMobileMenu}
        >
            <div className="mobile-menu__body">{children}</div>
        </div>
    );
};

export default (connect((state) => ({
    isShow: selectMobileMenuShowStatus(state),
}))(MobileMenu): any);
