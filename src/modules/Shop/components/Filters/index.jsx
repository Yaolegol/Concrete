// @flow
import {
    actionGetProducts,
    actionSetProductsFilter,
} from "modules/Shop/actions";
import { PriceFilter } from "modules/Shop/components/Filters/PriceFilter";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import "./index.less";

const minValue = 0;
const maxValue = 10000;
const initialValues = [minValue, maxValue];

export const Filters = (): React$Node => {
    const dispatch = useDispatch();
    const [priceFilterValue, setPriceFilterValue] = useState(initialValues);

    const onChange = useCallback((val) => {
        setPriceFilterValue(val);
    }, []);

    const onAfterChange = useCallback(
        (val) => {
            dispatch(
                actionSetProductsFilter({
                    price: val,
                })
            );
            dispatch(actionGetProducts());
        },
        [dispatch]
    );

    return (
        <div className="shop-page-filters">
            <h6 className="shop-page-filters__title">
                <FormattedMessage id="common.filters" />
            </h6>
            <div className="shop-page-filters__container">
                <PriceFilter
                    initialValues={initialValues}
                    max={maxValue}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                    values={priceFilterValue}
                />
            </div>
        </div>
    );
};
