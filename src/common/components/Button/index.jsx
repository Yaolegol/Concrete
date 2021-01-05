// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: any,
    fullWidth?: boolean,
    theme?: "white",
    type?: string,
};

export const Button = ({
    children,
    fullWidth,
    theme,
    type = "button",
    ...rest
}: TProps): React$Node => {
    return (
        <button
            {...rest}
            className={cn(
                "button",
                {
                    [`button_${theme || ""}`]: theme,
                },
                { "button_full-width": fullWidth }
            )}
            type={type}
        >
            {children}
        </button>
    );
};
