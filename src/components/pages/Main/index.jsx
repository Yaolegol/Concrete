// @flow
import { Layout } from 'common/Layout'
import { Hero } from 'pages/Main/Hero'
import React from 'react'
import './index.less'

export const MainPage = () => {
    return (
        <Layout>
            <div className='main-page'>
                <Hero />
            </div>
        </Layout>
    )
}
