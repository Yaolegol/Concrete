// @flow
import React from 'react'
import './index.less'

type TProps = {
    alt?: string,
    countInCart: number,
    description: string,
    price: number,
    src: string,
    title: string,
    totalPrice: number
}

export const CartItem = ({ alt = '', countInCart, description, price, src, title, totalPrice }: TProps) => {
    return (
        <div className='cart-item'>
            <img src={src} alt=""/>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <p>{countInCart}</p>
            <p>{totalPrice}</p>
        </div>
    )
}
