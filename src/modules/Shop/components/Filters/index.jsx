// @flow
import { useGetQueryFilters, useSetFiltersQuery } from "hooks/filters";
import { PriceFilter } from "modules/Shop/components/Filters/PriceFilter";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const minValue = 0;
const maxValue = 10000;
const initialValues = [minValue, maxValue];

export const Filters = (): React$Node => {
    const { setFiltersQuery } = useSetFiltersQuery();
    const { price } = useGetQueryFilters();
    const [priceFilterValue, setPriceFilterValue] = useState(
        price || initialValues
    );

    const onChange = useCallback((val) => {
        setPriceFilterValue(val);
    }, []);

    const onAfterChange = useCallback(
        (val) => {
            const [min, max] = val;
            const isDefaultValues = min === minValue && max === maxValue;

            setFiltersQuery({
                name: "price",
                values: isDefaultValues ? [] : val,
            });
        },
        [setFiltersQuery]
    );

    return (
        <div className="shop-page-filters">
            <h6 className="shop-page-filters__title">
                <FormattedMessage id="common.filters" />
            </h6>
            <div className="shop-page-filters__container">
                <PriceFilter
                    max={maxValue}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                    values={priceFilterValue}
                />
            </div>
        </div>
    );
};
