// @flow
import { ProductCardCounter } from 'common/components/ProductCard/ProductCardCounter'
import React, { useCallback, useState } from 'react'
import './index.less'

type TProps = {
    description: string,
    imageAlt?: string,
    imageUrl: string,
    price: string,
    title: string
}

export const ProductCard = ({ description, imageAlt = '', imageUrl, price, title }: TProps): React$Node => {
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
            <img className='product-card__image' src={imageUrl} alt={imageAlt}/>
            <h6 className='product-card__title'>{title}</h6>
            <p className='product-card__description'>{description}</p>
            <p className='product-card__price'>{price}</p>
            <div className='product-card__counter-container'>
                <ProductCardCounter count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
            </div>
        </div>
    )
}
