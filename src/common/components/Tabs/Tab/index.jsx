// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: string,
    className?: string,
    isActive?: boolean,
};

export const Tab = ({
    children,
    className,
    isActive,
    ...rest
}: TProps): React$Node => {
    return (
        <button
            {...rest}
            className={cn(
                "tabs-tab",
                isActive ? "tabs-tab_active" : null,
                className
            )}
        >
            {children}
        </button>
    );
};
