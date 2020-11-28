// @flow
import { CustomSelect } from "common/components/CustomSelect";
import React, { useState } from "react";
import "./index.less";

const options = [
    { label: "En", value: "en" },
    { label: "Ru", value: "ru" },
];

export const LangSelect = (): React$Node => {
    const [selectedOption, setSelectedOption] = useState(null);
    const onSelectChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <CustomSelect
            components={{
                IndicatorSeparator: null,
            }}
            onChange={onSelectChange}
            options={options}
            value={selectedOption}
        />
    );
};
