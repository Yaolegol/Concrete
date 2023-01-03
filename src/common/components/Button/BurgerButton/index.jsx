// @flow
import React from "react";
import "./index.less";

type TProps = {
    onClick?: () => void,
};

export const BurgerButton = ({ onClick }: TProps): React$Node => {
    return (
        <button className="burger-button" onClick={onClick} type="button">
            <span className="burger-button__line burger-button__line_without-margin"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
        </button>
    );
};
