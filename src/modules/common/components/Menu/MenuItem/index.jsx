// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: any,
    className?: string,
};

export const MenuItem = ({
    children,
    className,
    ...rest
}: TProps): React$Node => (
    <span {...rest} className={cn("menu-item", className)}>
        {children}
    </span>
);
