// @flow
import { Header } from 'common/Header'
import React from 'react'
import style from './index.module.less'

type TProps = {
    children: React$Node
}

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className={style.layout}>
            <Header />
            {children}
            <div className={style.footer}>footer</div>
        </div>
    )
}
