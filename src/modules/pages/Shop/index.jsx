// @flow
import { ProductCard } from 'common/components/ProductCard'
import { Layout } from 'layout/components/Layout'
import { actionGetProducts } from 'pages/Shop/actions'
import { selectProductsList } from 'pages/Shop/selectors'
import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
    dispatch: any,
    products: any
}

const ShopPage = ({ dispatch, products }: TProps) => {
    const productCards = useMemo(() => {
        return products.map(({ description, _id, images, price, title }) => {
            return (
                <span key={_id}>
                    <ProductCard description={description} imageUrl={images[0]} price={price} title={title}/>
                </span>
            )
        })
    }, [products])

    useEffect(() => {
        dispatch(actionGetProducts())
    }, [dispatch])

    console.log('products')
    console.log(products)

    return (
        <Layout>
            <div className='shop-page'>
                <h1>Shop</h1>
                <div className='shop-page__content'>
                    <div className='shop-page__filters-section'>test</div>
                    <div className='shop-page__goods-section'>
                        {productCards}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default connect((state) => ({
    products: selectProductsList(state)
}))(ShopPage)
