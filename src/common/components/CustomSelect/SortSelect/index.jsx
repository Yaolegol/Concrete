// @flow
import { CustomSelect } from "common/components/CustomSelect";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const SortSelect = ({ onChange, value, ...rest }: any): React$Node => {
    const options = useMemo(() => {
        return [
            {
                id: "price",
                label: <FormattedMessage id="common.sort.priceAscending" />,
                value: "ascending",
            },
            {
                id: "price",
                label: <FormattedMessage id="common.sort.priceDescending" />,
                value: "descending",
            },
        ];
    }, []);

    return (
        <div className="sort-select">
            <CustomSelect
                {...rest}
                components={{
                    IndicatorSeparator: null,
                }}
                onChange={onChange}
                options={options}
                placeholder={<FormattedMessage id="common.sort.placeholder" />}
                value={value}
            />
        </div>
    );
};
