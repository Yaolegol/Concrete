// @flow
import React, { useState } from "react";
import Select from "react-select";
import "./index.less";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

export const CustomSelect = (): React$Node => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (value) => {
        console.log("value");
        console.log(value);
        setSelectedOption(value);
    };

    return (
        <div className="custom-select">
            <Select
                classNamePrefix="select"
                components={{
                    DropdownIndicator: null,
                    IndicatorSeparator: null,
                }}
                isSearchable={false}
                onChange={handleChange}
                options={options}
                placeholder=""
                value={selectedOption}
            />
        </div>
    );
};
