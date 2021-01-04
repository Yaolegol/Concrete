// @flow
import { PriceFilter } from "pages/Shop/components/Filters/PriceFilter";
import React, { useCallback, useState } from "react";
import "./index.less";

export const Filters = (): React$Node => {
    const [priceFilterValue, setPriceFilterValue] = useState([0, 1000000]);

    const onPriceFilterChange = useCallback((val) => {
        setPriceFilterValue(val);
    }, []);

    return (
        <div className="shop-page-filters">
            <h6>Filters</h6>
            <div className="shop-page-filters__container">
                <PriceFilter
                    initialValues={[0, 1000000]}
                    max={1000000}
                    onChange={onPriceFilterChange}
                    values={priceFilterValue}
                />
            </div>
        </div>
    );
};
