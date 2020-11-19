// @flow
import { Range } from 'rc-slider'
import React from 'react'
import './index.less'

export const ShopPageFilters = () => {
    return (
        <div className='shop-page-filters'>
            <h6>Filters</h6>
            <div className='shop-page-filters__container'>
                <div>
                    <p>Price</p>
                    <div>
                        <Range />
                    </div>
                </div>
            </div>
        </div>
    )
}
