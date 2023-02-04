// @flow
import { CustomSelect } from "common/components/CustomSelect";
import { useGetSortQuery, useSetSortQuery } from "hooks/sort";
import React, { useCallback, useEffect, useState } from "react";
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

const getOption = (sortData) => {
    if (!sortData) {
        return null;
    }

    return options.find(({ value }) => value === sortData.value);
};

export const SortSelect = (): React$Node => {
    const { data } = useGetSortQuery();
    const { setSortQuery } = useSetSortQuery();
    const [value, setValue] = useState(getOption(data));

    const _onChange = useCallback(
        (val: any) => {
            const { id, value } = val;
            setSortQuery({
                name: id,
                value,
            });
        },
        [setSortQuery]
    );

    useEffect(() => {
        setValue(getOption(data));
    }, [data]);

    return (
        <div className="sort-select">
            <CustomSelect
                components={{
                    IndicatorSeparator: null,
                }}
                onChange={_onChange}
                options={options}
                placeholder={<FormattedMessage id="common.sort.placeholder" />}
                value={value}
            />
        </div>
    );
};
