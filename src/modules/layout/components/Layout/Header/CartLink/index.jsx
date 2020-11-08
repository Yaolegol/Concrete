// @flow
import CartIcon from 'img/main/header/cart.svg'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.less'

const CartLink = (): React$Node => {
    return (
        <Link className='cart-link' to="/cart">
            <div className='cart-link__icon-container'>
                <CartIcon className='cart-link__icon' />
                <span className='cart-link__counter'>5</span>
            </div>
        </Link>
    )
}

export default connect()(CartLink)
