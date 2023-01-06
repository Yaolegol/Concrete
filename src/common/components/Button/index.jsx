// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: any,
    fullWidth?: boolean,
    mobileFull?: boolean,
    theme?: "white",
    type?: string,
};

export const Button = ({
    children,
    fullWidth,
    mobileFull,
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
                { "button_full-width": fullWidth },
                mobileFull ? "button_mobile-full-width" : ""
            )}
            type={type}
        >
            {children}
        </button>
    );
};
