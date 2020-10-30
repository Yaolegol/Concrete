// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export const Menu = (): React$Node => {
    return (
        <div className='menu'>
            <Link to="/"><span className='menu__item'>home</span></Link>
            <Link to="/shop"><span className='menu__item'>shop</span></Link>
            <Link to="/signup"><span className='menu__item'>sign up</span></Link>
            <Link to="/login"><span className='menu__item'>log in</span></Link>
        </div>
    )
}
