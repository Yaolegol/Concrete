// @flow
import { ShopNowButton } from 'common/components/Button/ShopNowButton'
import React from 'react'
import './index.less'

export const CartEmpty = () => {
    return (
        <div className='cart-empty'>
            <p>Cart is empty yet :(</p>
            <div className='cart-empty__button-shop'>
                <ShopNowButton />
            </div>
        </div>
    )
}
