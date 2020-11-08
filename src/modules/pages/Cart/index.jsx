// @flow
import { Layout } from 'common/components/Layout'
import React from 'react'
import { connect } from 'react-redux'
import './index.less'

type TProps = {
}

const CartPage = ({ }: TProps) => {
    return (
        <Layout>
            <div className='cart-page'>
                <h1 className='cart-page__title'>Cart</h1>
                <div className='cart-page__content'>test</div>
            </div>
        </Layout>
    )
}

export default connect((state) => ({

}))(CartPage)
