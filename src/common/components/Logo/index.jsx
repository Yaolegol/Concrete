// @flow
import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

type TProps = {
    className?: string,
};

export const Logo = ({ className }: TProps): React$Node => {
    return (
        <Link className={cn("logo", className)} to="/">
            <img
                className="logo__img"
                src="images/main/header/logo.jpg"
                alt="Logo"
            />
        </Link>
    );
};
