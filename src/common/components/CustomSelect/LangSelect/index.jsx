// @flow
import { actionSelectLang } from "common/actions";
import { CustomSelect } from "common/components/CustomSelect";
import { selectCurrentLocale } from "common/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

const options = [
    { label: "En", value: "en" },
    { label: "Ru", value: "ru" },
];

export const LangSelect = (): React$Node => {
    const currentLocale = useSelector(selectCurrentLocale);
    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState(null);
    const onSelectChange = (value) => {
        setSelectedOption(value);
        dispatch(actionSelectLang(value.value));
    };

    useEffect(() => {
        const localeOption = options.find((opt) => opt.value === currentLocale);
        setSelectedOption(localeOption);
    }, [currentLocale]);

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
