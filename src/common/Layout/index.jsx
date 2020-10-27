// @flow
import { Header } from 'common/Header'
import React from 'react'
import './index.less'

type TProps = {
    children: React$Node
}

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className='layout'>
            <Header />
            <div className='layout__content'>
                <div className='layout__body'>
                    {children}
                </div>
                <div className='layout__footer'>footer</div>
            </div>
        </div>
    )
}
