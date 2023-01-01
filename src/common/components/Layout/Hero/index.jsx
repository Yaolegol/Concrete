// @flow
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const LayoutHero = ({ children }: TProps): React$Node => {
    return <div className="layout-hero">{children}</div>;
};
