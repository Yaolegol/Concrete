// @flow
import { CustomSelect } from "common/components/CustomSelect";
import { useSetSortQuery } from "hooks/sort";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const options = [
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

type TProps = {
    initialValue: string,
};

export const SortSelect = ({ initialValue }: TProps): React$Node => {
    const { setFiltersQuery } = useSetSortQuery();
    const [value, setValue] = useState(initialValue || options[0]);

    const onChange = useCallback(
        (val) => {
            setValue(val);
            setFiltersQuery(val.value);
        },
        [setFiltersQuery]
    );

    return (
        <div className="sort-select">
            <CustomSelect
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
