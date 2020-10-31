// @flow
import { MenuItem } from 'common/MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export const Menu = (): React$Node => {
    return (
        <div className='menu'>
            <Link to="/"><MenuItem>home</MenuItem></Link>
            <Link to="/shop"><MenuItem>shop</MenuItem></Link>
            <Link to="/signup"><MenuItem>sign up</MenuItem></Link>
            <Link to="/login"><MenuItem>log in</MenuItem></Link>
        </div>
    )
}
