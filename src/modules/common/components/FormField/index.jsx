// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
    errorMessage?: string,
    isError?: boolean,
    isTouched?: boolean,
    withMargin?: boolean,
};

export const FormField = ({
    children,
    errorMessage = "error",
    isError = false,
    isTouched = false,
    withMargin = true,
}: TProps): React$Node => {
    return (
        <div
            className={cn("form-field", {
                "form-field_with-margin": withMargin,
            })}
        >
            {children}
            <p
                className={cn("form-field__error-container", {
                    "form-field__error-container_show": isError && isTouched,
                })}
            >
                {errorMessage}
            </p>
        </div>
    );
};
