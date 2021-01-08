// @flow
import { debounce } from "common/helpers/debounce";
import {
    actionGetProducts,
    actionSetProductsFilter,
} from "modules/Shop/actions";
import { PriceFilter } from "pages/Shop/components/Filters/PriceFilter";
import React, { useCallback, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import "./index.less";

export const Filters = (): React$Node => {
    const dispatch = useDispatch();
    const [priceFilterValue, setPriceFilterValue] = useState([0, 10000]);

    const getProducts = useCallback(
        (val) => () => {
            dispatch(
                actionSetProductsFilter({
                    price: val,
                })
            );
            dispatch(actionGetProducts());
        },
        [dispatch]
    );

    const onPriceFilterChange = useCallback(
        (val) => {
            setPriceFilterValue(val);
            debounce({ action: getProducts(val), id: "filters", time: 500 });
        },
        [getProducts]
    );

    return (
        <div className="shop-page-filters">
            <h6>
                <FormattedMessage id="common.filters" />
            </h6>
            <div className="shop-page-filters__container">
                <PriceFilter
                    initialValues={[0, 10000]}
                    max={10000}
                    onChange={onPriceFilterChange}
                    values={priceFilterValue}
                />
            </div>
        </div>
    );
};
