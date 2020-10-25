// @flow

import React from 'react'
import style from './index.module.less'

export const Layout = ({ children }) => {
    return (
        <div className={style.test}>
            <div>header</div>
            {children}
            <div>footer</div>
        </div>
    )
}
