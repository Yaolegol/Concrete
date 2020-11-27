// @flow
import { ShopPagePriceFilter } from 'pages/Shop/components/ShopPageFilters/ShopPagePriceFilter'
import React, { useCallback, useState } from 'react'
import './index.less'

export const ShopPageFilters = () => {
    const [priceFilterValue, setPriceFilterValue] = useState([0, 1000000])

    const onPriceFilterChange = useCallback((val) => {
        setPriceFilterValue(val)
    }, [])

    return (
        <div className='shop-page-filters'>
            <h6>Filters</h6>
            <div className='shop-page-filters__container'>
                <ShopPagePriceFilter initialValues={priceFilterValue} max={priceFilterValue[1]} onChange={onPriceFilterChange} values={priceFilterValue} />
            </div>
        </div>
    )
}
