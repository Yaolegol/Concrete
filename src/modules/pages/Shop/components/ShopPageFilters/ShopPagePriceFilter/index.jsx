// @flow
import { Range } from 'rc-slider'
import React from 'react'
import './index.less'

type TProps = {
    initialValues: [number, number],
    max: number,
    onChange: (Array<number>) => any,
    values: Array<number>,
}

export const ShopPagePriceFilter = ({ initialValues, max, onChange, values }: TProps) => {
    return (
        <div className='shop-page-price-filter'>
            <h6 className='shop-page-price-filter__title'>
                <span>Price (</span>
                <span className='shop-page-price-filter__price'>{values[0]}</span>
                <span> - </span>
                <span className='shop-page-price-filter__price'>{values[1]}</span>
                <span>)</span>
            </h6>
            <div className='shop-page-price-filter__item'>
                <div className='shop-page-price-filter__item'>
                    <Range
                        defaultValue={initialValues}
                        max={max}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
