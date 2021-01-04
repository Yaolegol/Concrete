// @flow
import { debounce } from "common/helpers/debounce";
import { actionGetProducts } from "modules/Shop/actions";
import { PriceFilter } from "pages/Shop/components/Filters/PriceFilter";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

export const Filters = (): React$Node => {
    const [priceFilterValue, setPriceFilterValue] = useState([0, 10000]);
    const dispatch = useDispatch();
    const getProducts = useCallback(
        (val) => () => {
            dispatch(actionGetProducts({ filters: val }));
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
            <h6>Filters</h6>
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
