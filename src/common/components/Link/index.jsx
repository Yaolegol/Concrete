// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

type TProp = {
    children: any,
    url: string,
};

export const CustomLink = ({ children, url }: TProp): React$Node => {
    return (
        <Link className="link" to={url}>
            {children}
        </Link>
    );
};
