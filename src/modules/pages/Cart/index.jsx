// @flow
import { Layout } from 'common/components/Layout'
import { selectCartProductsData } from 'pages/Cart/selectors'
import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
    cartProductsData: any
}

const CartPage = ({ cartProductsData }: TProps) => {
    const content = useMemo(() => {
        return cartProductsData.map(({ countInCart, description, _id, images, price, title, totalPrice }) => {
            return (
                <div className='cart-page__content-item' key={_id}>
                    <img src={images[0]} alt=""/>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{countInCart}</p>
                    <p>{totalPrice}</p>
                </div>
            )
        })
    }, [cartProductsData])
    return (
        <Layout>
            <div className='cart-page'>
                <h1 className='cart-page__title'>Cart</h1>
                <div className='cart-page__content-section'>
                    <div className='cart-page__content-container'>
                        {content}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default connect((state) => ({
    cartProductsData: selectCartProductsData(state)
}))(CartPage)
