// @flow

import React from 'react'
import style from './index.module.less'

export const Layout = ({ children }) => {
    return (
        <div className={style.layout}>
            <div>header</div>
            {children}
            <div className={style.footer}>footer</div>
        </div>
    )
}
