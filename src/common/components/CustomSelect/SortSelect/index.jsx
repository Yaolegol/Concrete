// @flow
import { CustomSelect } from "common/components/CustomSelect";
import { useGetSortQuery, useSetSortQuery } from "hooks/sort";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const options = [
    {
        id: "price",
        label: <FormattedMessage id="common.sort.priceAscending" />,
        value: 1,
    },
    {
        id: "price",
        label: <FormattedMessage id="common.sort.priceDescending" />,
        value: -1,
    },
];

const getInitialValue = (sortData) => {
    if (!sortData) {
        return null;
    }

    return options.find(({ value }) => value === sortData.value);
};

type TProps = {
    onChange?: () => void,
};

export const SortSelect = ({ onChange }: TProps): React$Node => {
    const sortData = useGetSortQuery();
    const { setSortQuery } = useSetSortQuery();
    const [value, setValue] = useState(getInitialValue(sortData));

    const _onChange = useCallback(
        (val) => {
            if (onChange) {
                onChange();
            }

            setValue(val);

            const { id, value } = val;
            setSortQuery({
                name: id,
                value,
            });
        },
        [onChange, setSortQuery]
    );

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
