// @flow
import React from "react";
import "./index.less";

type TProps = {
    placeholder: string,
};

export const Input = ({ placeholder, ...rest }: TProps): React$Node => {
    return (
        <div className="input-container">
            <input
                {...rest}
                className="input-container__input"
                placeholder=" "
            />
            <span className="input-container__placeholder">{placeholder}</span>
            <span className="input-container__bottom-line" />
        </div>
    );
};
