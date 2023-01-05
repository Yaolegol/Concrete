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

const getInitialValue = (initialValue) => {
    return options.find(({ value }) => value === initialValue);
};

type TProps = {
    initialValue: string,
    onChange?: () => void,
};

export const SortSelect = ({ initialValue, onChange }: TProps): React$Node => {
    const { setSortQuery } = useSetSortQuery();
    const [value, setValue] = useState(
        getInitialValue(initialValue) || options[0]
    );

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
