// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
    isActive?: boolean,
};

export const Tab = ({ children, isActive, ...rest }: TProps): React$Node => {
    return (
        <button
            {...rest}
            className={cn(
                "modules-layout-footer-tabs-section-tab-item",
                isActive
                    ? "modules-layout-footer-tabs-section-tab-item_active"
                    : null
            )}
        >
            {children}
        </button>
    );
};
