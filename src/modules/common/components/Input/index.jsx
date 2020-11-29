// @flow
import cn from "classnames";
import React from "react";
import "./index.less";

export const Input = (): React$Node => {
    return (
        <div className="input-container">
            <input
                className="input-container__input"
                placeholder=" "
                type="text"
            />
            <span className="input-container__placeholder">Placeholder</span>
            <span className="input-container__bottom-line" />
        </div>
    );
};
