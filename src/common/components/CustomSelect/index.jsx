// @flow
import React from "react";
import Select from "react-select";
import "./index.less";

type TSelectOption = {
    id?: any,
    label: string,
    value: string,
};

type TProps = {
    isSearchable?: boolean,
    onChange: (TSelectOption) => any,
    options: Array<TSelectOption>,
    placeholder?: string,
    value: ?TSelectOption,
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
