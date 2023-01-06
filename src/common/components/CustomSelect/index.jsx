// @flow
import React from "react";
import Select from "react-select";
import "./index.less";
import type { ActionMeta, ValueType } from "react-select/src/types";

type TSelectOption = {
    id?: any,
    label: string | React$Node,
    value: string,
};

type TProps = {
    isSearchable?: boolean,
    onChange: (ValueType, ActionMeta) => void,
    options: Array<TSelectOption>,
    placeholder?: string | React$Node,
    value: ValueType,
};

export const CustomSelect = ({
    isSearchable = false,
    onChange,
    options,
    placeholder = "",
    value,
    ...rest
}: TProps): React$Node => {
    return (
        <div className="custom-select">
            <Select
                {...rest}
                className="select"
                classNamePrefix="select"
                isSearchable={isSearchable}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};
