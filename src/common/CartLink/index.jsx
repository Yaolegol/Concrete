// @flow
import CartIcon from 'img/main/header/cart.svg'
import React from 'react'
import './index.less'

export const CartLink = (): React$Node => {
    return (
        <a className='cart-link' href="/">
            <CartIcon className='cart-link__icon' />
        </a>
    )
}
