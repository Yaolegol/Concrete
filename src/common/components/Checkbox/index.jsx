// @flow
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Checkbox = ({ children, ...rest }: TProps): React$Node => {
    return (
        <div className="checkbox">
            <label className="checkbox__input-label">
                <input {...rest} className="checkbox__input" type="checkbox" />
                <span className="checkbox__checkmark" />
                <span className="checkbox__title">{children}</span>
            </label>
        </div>
    );
};
