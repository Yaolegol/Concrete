// @flow
import { Layout } from 'layout/components/Layout'
import { Description } from 'pages/Main/Description'
import { Portfolio } from 'pages/Main/Portfolio'
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
                <Portfolio />
            </div>
        </Layout>
    )
}