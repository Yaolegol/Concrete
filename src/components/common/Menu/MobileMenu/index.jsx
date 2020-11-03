// @flow
import React from 'react'
import './index.less'

type TProps = {
    children: React$Node,
}

export const MobileMenu = ({ children }: TProps): React$Node => {
    return (
        <div className='mobile-menu'>
            <div className='mobile-menu__body'>
                {children}
            </div>
        </div>
    )
}
