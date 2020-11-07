// @flow
import { request } from 'app/service'
import { Layout } from 'layout/components/Layout'
import React, { useEffect } from 'react'
import './index.less'

export const ShopPage = () => {
    useEffect(() => {
        console.log('ShopPage useEffect!!!')
        request()
    }, [])

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
