// @flow
import { ProductCardCounter } from 'common/components/ProductCard/ProductCardCounter'
import React, { useCallback, useState } from 'react'
import './index.less'

export const ProductCard = (): React$Node => {
    const [count, setCount] = useState(0)

    const onDecrement = useCallback(() => {
        if (count > 0) {
            setCount(count - 1)
        }
    }, [count])

    const onIncrement = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div className='product-card'>
            <img className='product-card__image' src="img/test-product-image.jpg" alt="Product image"/>
            <h6 className='product-card__title'>title</h6>
            <p className='product-card__description'>description</p>
            <p className='product-card__price'>100$</p>
            <div className='product-card__counter-container'>
                <ProductCardCounter count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
            </div>
        </div>
    )
}
