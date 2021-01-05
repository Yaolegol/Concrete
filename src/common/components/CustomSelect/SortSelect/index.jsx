// @flow
import { CustomSelect } from "common/components/CustomSelect";
import React from "react";
import "./index.less";

const options = [
    { label: "По возрастанию цены", value: "price min" },
    { label: "По убыванию цены", value: "price max" },
];

export const SortSelect = ({ onChange, value, ...rest }: any): React$Node => {
    return (
        <div className="sort-select">
            <CustomSelect
                {...rest}
                components={{
                    IndicatorSeparator: null,
                }}
                onChange={onChange}
                options={options}
                placeholder="Сортировать..."
                value={value}
            />
        </div>
    );
};
