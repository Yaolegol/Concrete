// @flow
import cn from 'classnames'
import { selectCartProductsCount } from 'common/selectors'
import CartIcon from 'img/main/header/cart.svg'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.less'

type TProps = {
    cartProductsCount: number
}

const CartLink = ({ cartProductsCount }: TProps): React$Node => {
    return (
        <Link className='cart-link' to="/cart">
            <div className='cart-link__icon-container'>
                <CartIcon className='cart-link__icon' />
                <span className={cn('cart-link__counter', cartProductsCount === 0 ? 'cart-link__counter_hidden' : null)}>{cartProductsCount}</span>
            </div>
        </Link>
    )
}

export default connect((state) => ({
    cartProductsCount: selectCartProductsCount(state)
}))(CartLink)
