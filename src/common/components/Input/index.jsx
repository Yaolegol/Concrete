// @flow
import React, { useCallback } from "react";
import "./index.less";

type TProps = {
    isNumber?: boolean,
    onChange: (any) => void,
    placeholder: string,
};

export const Input = ({
    isNumber,
    onChange,
    placeholder,
    ...rest
}: TProps): React$Node => {
    const handleChange = useCallback(
        (e) => {
            if (isNumber) {
                const { value } = e.target;
                if (!isNaN(Number(value))) {
                    onChange(e);
                }
            } else {
                onChange(e);
            }
        },
        [isNumber, onChange]
    );

    return (
        <div className="input-container">
            <input
                {...rest}
                className="input-container__input"
                onChange={handleChange}
                placeholder=" "
            />
            <span className="input-container__placeholder">{placeholder}</span>
            <span className="input-container__bottom-line" />
        </div>
    );
};
