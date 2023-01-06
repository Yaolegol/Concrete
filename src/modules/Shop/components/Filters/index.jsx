// @flow
import { useGetQueryFilters, useSetFiltersQuery } from "hooks/filters";
import { PriceFilter } from "modules/Shop/components/Filters/PriceFilter";
import React, { useCallback, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const minValue = 0;
const maxValue = 10000;
const initialValues = [minValue, maxValue];

type TProps = {
    onAfterChange?: () => void,
};

export const Filters = ({ onAfterChange }: TProps): React$Node => {
    const { setFiltersQuery } = useSetFiltersQuery();
    const { price } = useGetQueryFilters();
    const [priceFilterValue, setPriceFilterValue] = useState(initialValues);

    const onChange = useCallback((val) => {
        setPriceFilterValue(val);
    }, []);

    const _onAfterChange = useCallback(
        (val) => {
            const [min, max] = val;
            const isDefaultValues = min === minValue && max === maxValue;

            if (onAfterChange) {
                onAfterChange();
            }

            setFiltersQuery({
                name: "price",
                values: isDefaultValues ? [] : val,
            });
        },
        [onAfterChange, setFiltersQuery]
    );

    useEffect(() => {
        if (!price) {
            return;
        }

        setPriceFilterValue(price);
    }, [price]);

    return (
        <div className="shop-page-filters">
            <h6 className="shop-page-filters__title">
                <FormattedMessage id="common.filters" />
            </h6>
            <div className="shop-page-filters__container">
                <PriceFilter
                    max={maxValue}
                    onChange={onChange}
                    onAfterChange={_onAfterChange}
                    values={priceFilterValue}
                />
            </div>
        </div>
    );
};
