// @flow
import React from 'react'
import './index.less'

export const CartContentHeader = () => {
    return (
        <div className='cart-content-header'>
            <div className='cart-content-header__image' />
            <p>Title</p>
            <p>Description</p>
            <p>Price</p>
            <p>Count</p>
            <p>Total</p>
        </div>
    )
}
