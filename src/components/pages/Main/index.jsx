// @flow
import { Layout } from 'common/Layout'
import { Description } from 'pages/Main/Description'
import { Hero } from 'pages/Main/Hero'
import React from 'react'
import './index.less'

export const MainPage = () => {
    return (
        <Layout
            hero={<Hero />}
        >
            <div className='main-page'>
                <Description />
            </div>
        </Layout>
    )
}
