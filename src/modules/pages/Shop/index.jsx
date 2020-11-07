// @flow
import { Layout } from 'layout/components/Layout'
import React from 'react'
import './index.less'

export const ShopPage = () => {
    return (
        <Layout>
            <div className='shop-page'>
                <h1>Shop</h1>
                <div className='shop-page__content'>
                    <div className='shop-page__filters-section'></div>
                    <div className='shop-page__goods-section'></div>
                </div>
            </div>
        </Layout>
    )
}
