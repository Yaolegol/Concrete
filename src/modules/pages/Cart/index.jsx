// @flow
import { Layout } from 'common/components/Layout'
import { CartContentHeader } from 'pages/Cart/components/CartContentHeader'
import { CartEmpty } from 'pages/Cart/components/CartEmpty'
import { CartItem } from 'pages/Cart/components/CartItem'
import { selectCartProductsData } from 'pages/Cart/selectors'
import { TCartProductsData } from 'pages/Cart/types'
import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
    cartProductsData: TCartProductsData
}

const CartPage = ({ cartProductsData }: TProps) => {
    const contentItems = useMemo(() => {
        return cartProductsData.map(({ countInCart, description, _id, images, price, title, totalPrice }) => {
            return (
                <CartItem countInCart={countInCart} description={description} key={_id} price={price} src={images[0]} title={title} totalPrice={totalPrice} />
            )
        })
    }, [cartProductsData])

    const empty = useMemo(() => {
        return (
            <CartEmpty />
        )
    }, [])

    const content = useMemo(() => {
        return contentItems.length ? (
            <div className='cart-page__content-section'>
                <CartContentHeader />
                <div className='cart-page__content-container'>
                    {contentItems}
                </div>
            </div>
        ) : empty
    }, [contentItems, empty])

    return (
        <Layout>
            <div className='cart-page'>
                <h1 className='cart-page__title'>Cart</h1>
                {content}
            </div>
        </Layout>
    )
}

export default connect((state) => ({
    cartProductsData: selectCartProductsData(state)
}))(CartPage)
