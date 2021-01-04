// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: any,
    theme?: "white",
    type?: string,
};

export const Button = ({
    children,
    theme,
    type = "button",
    ...rest
}: TProps): React$Node => {
    return (
        <button
            {...rest}
            className={cn("button", { [`button_${theme}`]: theme })}
            type={type}
        >
            {children}
        </button>
    );
};
