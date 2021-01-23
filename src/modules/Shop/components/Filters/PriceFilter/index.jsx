// @flow
import { Range } from "rc-slider";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type rangeValues = [number, number];

type TProps = {
    initialValues: rangeValues,
    max: number,
    onChange: (rangeValues) => any,
    values: rangeValues,
};

export const PriceFilter = ({
    initialValues,
    max,
    onChange,
    values,
}: TProps): React$Node => {
    return (
        <div className="shop-page-price-filter">
            <h6 className="shop-page-price-filter__title">
                <span>
                    <FormattedMessage id="common.price" /> (
                </span>
                <span className="shop-page-price-filter__price">
                    {values[0]}
                </span>
                <span> - </span>
                <span className="shop-page-price-filter__price">
                    {values[1]}
                </span>
                <span>)</span>
            </h6>
            <div className="shop-page-price-filter__item">
                <div className="shop-page-price-filter__item">
                    <Range
                        defaultValue={initialValues}
                        max={max}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
};
