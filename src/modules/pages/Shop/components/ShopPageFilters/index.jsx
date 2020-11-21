// @flow
import { Range } from 'rc-slider'
import React, { useState } from 'react'
import './index.less'

export const ShopPageFilters = () => {
    const [priceFilterValue, setPriceFilterValue] = useState([0, 1000000])

    return (
        <div className='shop-page-filters'>
            <h6>Filters</h6>
            <div className='shop-page-filters__container'>
                <div>
                    <h6 className='shop-page-filters__title'>Price</h6>
                    <div className='shop-page-filters__item'>
                        <div>
                            <div>Min {priceFilterValue[0]}</div>
                            <div>Max {priceFilterValue[1]}</div>
                        </div>
                        <div className='shop-page-filters__item'>
                            <Range
                                defaultValue={[0, 1000000]}
                                max={1000000}
                                onChange={(val) => {
                                    console.log(val)
                                    setPriceFilterValue(val)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
