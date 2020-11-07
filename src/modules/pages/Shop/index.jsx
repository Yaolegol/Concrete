// @flow
import { actionGetProducts } from 'pages/Shop/actions'
import { Layout } from 'layout/components/Layout'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
    dispatch: any
}

const ShopPage = ({ dispatch }: TProps) => {
    useEffect(() => {
        dispatch(actionGetProducts())
    }, [dispatch])

    return (
        <Layout>
            <div className='shop-page'>
                <h1>Shop</h1>
                <div className='shop-page__content'>
                    <div className='shop-page__filters-section'>test</div>
                    <div className='shop-page__goods-section'>test</div>
                </div>
            </div>
        </Layout>
    )
}

export default connect()(ShopPage)
