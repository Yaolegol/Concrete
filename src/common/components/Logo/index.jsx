// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

export const Logo = (): React$Node => {
    return (
        <Link className="logo" to="/">
            <img alt="Logo" className="logo__img" src="/icons/logo.svg" />
        </Link>
    );
};
