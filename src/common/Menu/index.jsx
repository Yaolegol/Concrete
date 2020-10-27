// @flow
import React from 'react'
import './index.less'

export const Menu = (): React$Node => {
    return (
        <div className='menu'>
            <span className='menu__item'>home</span>
            <span className='menu__item'>shop</span>
            <span className='menu__item'>sign up</span>
            <span className='menu__item'>log in</span>
        </div>
    )
}
