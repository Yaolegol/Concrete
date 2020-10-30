// @flow
import CartIcon from 'img/main/header/cart.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export const CartLink = (): React$Node => {
    return (
        <Link className='cart-link' to="/cart">
            <CartIcon className='cart-link__icon' />
        </Link>
    )
}
