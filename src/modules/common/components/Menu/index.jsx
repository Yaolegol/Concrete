// @flow
import cn from 'classnames'
import { MenuItem } from 'common/components/Menu/MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

type TProps = {
    className?: string
}

export const Menu = ({ className }: TProps): React$Node => {
    return (
        <div className={cn('menu', className)}>
            <Link to="/"><MenuItem>home</MenuItem></Link>
            <Link to="/shop"><MenuItem>shop</MenuItem></Link>
            <Link to="/signup"><MenuItem>sign up</MenuItem></Link>
            <Link to="/login"><MenuItem>log in</MenuItem></Link>
        </div>
    )
}
