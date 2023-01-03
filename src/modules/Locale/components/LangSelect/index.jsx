// @flow
import { CustomSelect } from "common/components/CustomSelect";
import { actionSetLocale } from "modules/Locale/actions";
import { selectCurrentLocale } from "modules/Locale/selectors";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ValueType } from "react-select/src/types";
import "./index.less";

const options = [
    { label: "En", value: "en" },
    { label: "Ru", value: "ru" },
];

export const LangSelect = (): React$Node => {
    const currentLocale = useSelector(selectCurrentLocale);
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState<ValueType>(null);

    const onChange = useCallback(
        (selectValue: ValueType) => {
            setSelectedOption(selectValue);

            if (selectValue && !Array.isArray(selectValue)) {
                dispatch(actionSetLocale(selectValue.value));
            }
        },
        [dispatch]
    );

    useEffect(() => {
        const localeOption = options.find((opt) => opt.value === currentLocale);
        setSelectedOption(localeOption);
    }, [currentLocale]);

    return (
        <CustomSelect
            components={{
                IndicatorSeparator: null,
            }}
            onChange={onChange}
            options={options}
            value={selectedOption}
        />
    );
};
