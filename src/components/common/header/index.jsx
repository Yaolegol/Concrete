// @flow
import React from 'react'
import style from './index.module.less'

type TProps = {
    children: React$Node
}

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className={style.test}>
            <div>header</div>
            {children}
            <div>footer</div>
        </div>
    )
}
